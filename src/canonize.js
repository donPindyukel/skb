export default function cannonize(url) {
  const re = new RegExp('@?(https?:)?(\/\/)?(www.)?((telegram|vk|vkontakte|twitter)[^\/]*\/)?([a-zA-Z0-9\.]*)','i');
  const username = url.match(re)[6];
  return '@'+username;
}
