var arr = [];
function insert(title, descr) {
  arr.push([title, descr]);
  console.log(arr);
}
module.exports = {
  insert: insert
};
