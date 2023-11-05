export default function formatNumber(num: number): string {
    return num.toLocaleString('en-US', { maximumFractionDigits: 3 })
}
