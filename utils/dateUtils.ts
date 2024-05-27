export const makeDateFromSlashFormat = (slashFormatDate: string) => {
    const spaceFormatDate = slashFormatDate.split('/').reverse().join(' ');
    const out = new Date(spaceFormatDate + ' 12:');
    console.log(out);
    return out
}