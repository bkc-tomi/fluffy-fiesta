export const OBJToJSON = (obj: any): string => {
    return JSON.stringify(obj);
}

export const JSONToOBJ = (json: string): any => {
    return JSON.parse(json);
}

/**
 * 引数で指定された配列の順序をシャッフルした配列を返す関数
 * @param arr string[]
 * @returns string[]
 */
export const ShuffleArray = (arr: string[]):string[] => {
    const cloneArray = [...arr];

    for (let i = cloneArray.length - 1; i >= 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      // 配列の要素の順番を入れ替える
      let tmpStorage = cloneArray[i];
      cloneArray[i] = cloneArray[rand];
      cloneArray[rand] = tmpStorage;
    }

    return cloneArray;
}

/**
 * 引数で指定された2つの配列が同じ要素を持つか比較し、持つ場合はtrue、そうでない場合はfalseを返す関数。順序が異なる場合はfalseを返す。
 * @param arr1 string[]
 * @param arr2 string[]
 * @returns boolean
 */
export const ComparisonArray = (arr1: string[], arr2: string[]): boolean => {
    if (arr1.length != arr2.length) return false;

    if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
        return true;
    } else {
        return false;
    }
}

/**
 * 引数で指定された2つの配列が同じ要素を持つか比較し、持つ場合はtrue、そうでない場合はfalseを返す関数。順不同でも要素が一致すればtrueを返す。
 * @param arr1 string[]
 * @param arr2 string[]
 * @returns boolean
 */
export const ComparisonRandomOrderArray = (arr1: string[], arr2: string[]):boolean => {
    if (arr1.length != arr2.length) return false;

    const sortedArr1 = arr1.sort((a, b) => {
        if (a > b) {
            return 1;
        } else {
            return -1;
        }
    });
    const sortedArr2 = arr2.sort((a, b) => {
        if (a > b) {
            return 1;
        } else {
            return -1;
        }
    });

    if (JSON.stringify(sortedArr1) === JSON.stringify(sortedArr2)) {
        return true;
    } else {
        return false;
    }
}