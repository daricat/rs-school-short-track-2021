/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) return {};

  const domain = domains
    .sort((elem1, elem2) => elem1.length - elem2.length)
    .map((elem) => elem.split('.'));
  const result = {};

  result[`.${domain[0][1]}`] = domains.length;

  domain.forEach((element) => {
    const nameDNS = [...element].reverse().join('.');
    result[`.${nameDNS}`] = domains
      .filter((elem) => elem.includes(element.join('.')))
      .length;
  });

  return result;
}

module.exports = getDNSStats;
