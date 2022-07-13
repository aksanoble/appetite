export var combinations = function (a, min) {
  var fn = function (n, src, got, all) {
    if (n == 0) {
      if (got.length > 0) {
        all[all.length] = got;
      }
      return;
    }
    for (var j = 0; j < src.length; j++) {
      fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
    }
    return;
  }
  var all = [];
  for (var i = min; i < a.length; i++) {
    fn(i, a, [], all);
  }
  all.push(a);
  return all;
}

export const filteredCombinations = (combs, persons, total) => {
  return combs.filter(c => {
    return c.reduce((acc, curr) => {
      return acc + persons * curr.amount
    }, 0) <= total
  })
}

export const totalByGroup = (restaurants, persons, total) => {
  return restaurants.map(r => {
    const combs = combinations(r.foodItems, 1)
    const groups = filteredCombinations(combs, persons, total)
    const groupTotals = groups.map(g => g.reduce((acc, curr) => {
      return Number(acc) + Number(curr.amount)
    }, 0))

    return {
      ...r,
      groups,
      groupTotals
    }
  })
}

