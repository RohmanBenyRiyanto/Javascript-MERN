export default function formatNumber(number) {
    const numberFormat = new Intl.NumberFormat("id-ID");
    return numberFormat.format(number);
}