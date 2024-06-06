const osSelect = document.getElementById('os-select');
const downloadLinks = document.getElementById('download-links');

osSelect.addEventListener('change', () => {
  const selectedOS = osSelect.value;
  downloadLinks.innerHTML = ''; // Clear previous links

  if (selectedOS === 'windows') {
    downloadLinks.innerHTML = `
      <a href="https://cdn.openttd.org/openttd-releases/14.1/openttd-14.1-windows-arm64.exe">Windows 10 / 11 (ARM64) (installer)</a>
      <a href="https://cdn.openttd.org/openttd-releases/14.1/openttd-14.1-windows-arm64.zip">Windows 10 / 11 (ARM64) (zip archive)</a>
      <a href="https://cdn.openttd.org/openttd-releases/14.1/openttd-14.1-windows-win32.exe">Windows 7 / 8 / 10 / 11 (32-bit) (installer)</a>
      <a href="https://cdn.openttd.org/openttd-releases/14.1/openttd-14.1-windows-win32.zip">Windows 7 / 8 / 10 / 11 (32-bit) (zip archive)</a>
      <a href="https://cdn.openttd.org/openttd-releases/14.1/openttd-14.1-windows-win64.exe">Windows 7 / 8 / 10 / 11 (64-bit) (installer)</a>
      <a href="https://cdn.openttd.org/openttd-releases/14.1/openttd-14.1-windows-win64.zip">Windows 7 / 8 / 10 / 11 (64-bit) (zip archive)</a>
    `;
  } else if (selectedOS === 'macos') {
    downloadLinks.innerHTML = `
      <a href="https://cdn.openttd.org/openttd-releases/14.1/openttd-14.1-macos-universal.dmg">macOS 10.14+ / 11+ (Intel / Apple Silicon) (disk image)</a>
      <a href="https://cdn.openttd.org/openttd-releases/14.1/openttd-14.1-macos-universal.zip">macOS 10.14+ / 11+ (Intel / Apple Silicon) (zip archive)</a>
    `;
  } else if (selectedOS === 'linux') {
    downloadLinks.innerHTML = `
      <a href="https://cdn.openttd.org/openttd-releases/14.1/openttd-14.1-linux-generic-amd64.tar.xz">Linux Generic Binaries (x86_64, 64bit) (xz/lzma archive)</a>
    `;
  } else { // 'any' or default
    downloadLinks.innerHTML = `
    <a href="https://cdn.openttd.org/openttd-releases/14.1/openttd-14.1-windows-arm64.exe">Windows 10 / 11 (ARM64) (installer)</a>
    <a href="https://cdn.openttd.org/openttd-releases/14.1/openttd-14.1-windows-arm64.zip">Windows 10 / 11 (ARM64) (zip archive)</a>
    <a href="https://cdn.openttd.org/openttd-releases/14.1/openttd-14.1-windows-win32.exe">Windows 7 / 8 / 10 / 11 (32-bit) (installer)</a>
    <a href="https://cdn.openttd.org/openttd-releases/14.1/openttd-14.1-windows-win32.zip">Windows 7 / 8 / 10 / 11 (32-bit) (zip archive)</a>
    <a href="https://cdn.openttd.org/openttd-releases/14.1/openttd-14.1-windows-win64.exe">Windows 7 / 8 / 10 / 11 (64-bit) (installer)</a>
    <a href="https://cdn.openttd.org/openttd-releases/14.1/openttd-14.1-windows-win64.zip">Windows 7 / 8 / 10 / 11 (64-bit) (zip archive)</a>
    <a href="https://cdn.openttd.org/openttd-releases/14.1/openttd-14.1-macos-universal.dmg">macOS 10.14+ / 11+ (Intel / Apple Silicon) (disk image)</a>
    <a href="https://cdn.openttd.org/openttd-releases/14.1/openttd-14.1-macos-universal.zip">macOS 10.14+ / 11+ (Intel / Apple Silicon) (zip archive)</a>
    <a href="https://cdn.openttd.org/openttd-releases/14.1/openttd-14.1-linux-generic-amd64.tar.xz">Linux Generic Binaries (x86_64, 64bit) (xz/lzma archive)</a>
    `; 
  }
});

