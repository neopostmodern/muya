/**
 * Slugger generates header id
 */

function Slugger () {
  this.seen = {}
}

/**
 * Convert string to unique id
 */

Slugger.prototype.slug = function (value) {
  let slug = value
    .toLowerCase()
    .trim()
    // remove html tags
    .replace(/<[!\/a-z].*?>/ig, '') // eslint-disable-line no-useless-escape
    // remove unwanted chars
    .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
    .replace(/\s/g, '-')

  if (this.seen.hasOwnProperty(slug)) { // eslint-disable-line no-prototype-builtins
    const originalSlug = slug
    do {
      this.seen[originalSlug]++
      slug = originalSlug + '-' + this.seen[originalSlug]
    } while (this.seen.hasOwnProperty(slug)) // eslint-disable-line no-prototype-builtins
  }
  this.seen[slug] = 0

  return slug
}

export default Slugger
