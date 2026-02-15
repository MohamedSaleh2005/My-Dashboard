import { CiStar } from "react-icons/ci"
import { useFavourites } from "./FavouriteContext"

type Props = {
  item: any
}

export default function AddFavourite({ item }: Props) {
  const { favourites, toggleFavourite } = useFavourites()
  const isFavourite = favourites.some(f => f.code === item.code)

  return (
    <span
      onClick={() => toggleFavourite(item)}
      className={`cursor-pointer text-2xl transition-all duration-300 ${
        isFavourite ? "text-yellow-400" : "text-gray-400 Rotate"
      }`}
    >
      <CiStar />
    </span>
  )
}
