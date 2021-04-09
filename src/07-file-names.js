/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(nam) {
  const rename = (names) => {
    const namesCopy = [...names];
    const unique = () => {
      [...new Set(namesCopy)]
        .map((uniqueName) => namesCopy.reduce((indexArray, name, i) => {
          if (name === uniqueName) indexArray.push(i);
          return indexArray;
        }, []))
        .map((indexArray) => indexArray.forEach((index, i) => {
          if (i !== 0) namesCopy[index] = `${namesCopy[index]}(${i})`;
        }));
    };
    unique();
    return namesCopy;
  };

  const firstRenamingFiles = rename(nam);

  const checkDuplicates = (arr) => {
    if (arr.length === [...new Set(arr)].length) return arr;
    const renamingFiles = rename(arr);
    return checkDuplicates(renamingFiles);
  };

  return checkDuplicates(firstRenamingFiles);
}

module.exports = renameFiles;
