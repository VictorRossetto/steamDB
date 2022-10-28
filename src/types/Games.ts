export type Games = {
    _id: string,
    app: string,
    name: string,
    appType: string,
    developer : [string],
    publisher: string,
    supportedSystems: [string],
    lasChangeNumber: number,
    supported: [string],
    playersNow: number,
    img: string,
    price: number,
    peakToday: number
}