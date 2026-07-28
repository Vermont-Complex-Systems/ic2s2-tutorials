import QRCode from 'qrcode';

const url = process.argv[2] ?? 'https://vermont-complex-systems.github.io/ic2s2-tutorials/storywrangler';
const out = process.argv[3] ?? 'static/qr-storywrangler.png';

await QRCode.toFile(out, url, {
	width: 600,
	margin: 2,
	errorCorrectionLevel: 'M'
});

console.log(`QR code for ${url} written to ${out}`);
