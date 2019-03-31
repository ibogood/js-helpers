/**
 * 将骆驼峰或者pascal 转换成连接符的
 * @param String name
 * @param String separator
 * @return String
 */
function slug(name, separator) {
  return name.replace(/(.{1})([A-Z])/g, "$1" + separator + "$2").toLowerCase();
}
/**
 * 将连接符的字符串转换成骆驼峰
 * @param String name
 * @param String separator
 * @return String
 */
function camel(name) {
  return name.replace(/[-_](.{1})/g, function(_, item) {
    return item.toUpperCase();
  });
}
/**
 * 将连接符的字符串转换成Pascal
 * @param String name
 * @param String separator
 * @return String
 */
function pascal(name) {
  return name.replace(/(^[a-z]|[-_](.{1}))/g, function(_, first, second) {
    if (!!second) {
      return second.toUpperCase();
    } else {
      return first.toUpperCase();
    }
  });
}
module.exports = {
    slug,
    camel,
    pascal
}