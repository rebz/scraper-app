export const mapModelToForm = (destination, object) => {
    let form = {}
    Object.keys(destination).map(k => form[k] = object[k])
    return form
}