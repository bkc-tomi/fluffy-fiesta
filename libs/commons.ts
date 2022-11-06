export const OBJToJSON = (obj: any): string => {
    return JSON.stringify(obj);
}

export const JSONToOBJ = (json: string): any => {
    return JSON.parse(json);
}