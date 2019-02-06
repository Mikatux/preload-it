export default function getItemByUrl(rawUrl) {
    for (var item of this.status) {
        if (rawUrl.includes(item.url)) return item
    }
}
