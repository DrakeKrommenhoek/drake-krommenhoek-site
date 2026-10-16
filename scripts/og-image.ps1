# Renders public/og.png (1200x630) in the site's typefaces.
# Run from the repo root: pwsh scripts/og-image.ps1
# A static file is used because Next 14's bundled @vercel/og cannot prerender on Windows.

Add-Type -AssemblyName System.Drawing

$fontDir = Join-Path ([System.IO.Path]::GetTempPath()) 'dk-og-fonts'
New-Item -ItemType Directory -Force $fontDir | Out-Null

function Get-GoogleFont([string]$query, [string]$file) {
    $path = Join-Path $fontDir $file
    if (-not (Test-Path $path)) {
        # No browser user agent, so Google Fonts serves a static TTF.
        $css = (Invoke-WebRequest "https://fonts.googleapis.com/css2?family=$query" -UserAgent 'curl').Content
        $url = [regex]::Match($css, 'src: url\((.+?)\)').Groups[1].Value
        Invoke-WebRequest $url -OutFile $path
    }
    return $path
}

$fonts = New-Object System.Drawing.Text.PrivateFontCollection
$fonts.AddFontFile((Get-GoogleFont 'Fraunces:opsz,wght@144,400' 'fraunces.ttf'))
$fonts.AddFontFile((Get-GoogleFont 'Instrument+Sans:wght@400' 'instrument-sans.ttf'))
$display = $fonts.Families | Where-Object Name -like 'Fraunces*' | Select-Object -First 1
$sans = $fonts.Families | Where-Object Name -like 'Instrument*' | Select-Object -First 1

$bmp = New-Object System.Drawing.Bitmap 1200, 630
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.TextRenderingHint = 'AntiAliasGridFit'
$g.SmoothingMode = 'AntiAlias'
$g.Clear([System.Drawing.ColorTranslator]::FromHtml('#F4F1EA'))

$ink = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#16181D'))
$muted = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#5B5F66'))
$navy = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#0B2545'))

$small = New-Object System.Drawing.Font $sans, 20, ([System.Drawing.FontStyle]::Regular), ([System.Drawing.GraphicsUnit]::Point)
$big = New-Object System.Drawing.Font $display, 54, ([System.Drawing.FontStyle]::Regular), ([System.Drawing.GraphicsUnit]::Point)

$g.DrawString('Drake Krommenhoek, Washington and Lee, Class of 2028', $small, $muted, 80, 72)
$lines = @('I find problems worth solving,', 'understand them with data,', 'and build the products that fix them.')
$y = 200
foreach ($line in $lines) {
    $g.DrawString($line, $big, $ink, 74, $y)
    $y += 86
}
$g.FillRectangle($navy, 80, 530, 120, 6)

$out = Join-Path (Resolve-Path 'public').Path 'og.png'
$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose(); $bmp.Dispose(); $fonts.Dispose()
Write-Output "Wrote $out"
