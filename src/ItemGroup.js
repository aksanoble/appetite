import { combinations, filteredCombinations, totalByGroup } from './utils'
const ItemGroup = (props) => {

  const Items = (groups, persons) => {
    const MenuItems = (items, index) => {
      return items.map((item, index) => {
        return <div key={index} className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">{item.name}</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">X {persons}</dd>
        </div>
      })
    }
    return groups.map((group, index) => {
      return <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Group {index + 1}</h3>
          {/* <h2 className="text-lg leading-6 font-medium text-gray-900">{grouped.total[i]}</h2> */}
        </div>
        <div className="border-t border-gray-200">
          <dl>
            {MenuItems(group)}
          </dl>
        </div>
      </div>

    })
  }


  const grouped = totalByGroup(props.restaurants, props.persons, props.total).filter(r => r.groups.length > 0)

  return grouped.map((res, i) =>
    <div>
      <h3 className="text-3xl py-8 leading-6 font-medium text-gray-900">{res.shopName}</h3>
      <div className="md:grid md:grid-cols-4 gap-4">
        {Items(res.groups, props.persons)}
      </div>
    </div>
  )
}

export default ItemGroup