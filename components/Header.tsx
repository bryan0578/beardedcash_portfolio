interface Props {
  query: string;
  category: string;
}

const Header = ({ query, category}: Props) => {
  if(query && category) {
    return (
      <h3 className="heading3 self-start text-white-800">
        Search results for "{query}" in <span className="capitalize">{category}</span>
      </h3>
    )
  }

  if(query) {
    return (
      <h3 className="heading3 self-start text-white-800">
        Search results for "{query}"
      </h3>
    )
  }

  if(category) {
    return (
      <h3 className="heading3 self-start text-white-800">
        Search results for <span className="capitalize">{category}</span>
      </h3>
    )
  }
  
  return (
    <h3 className="heading3 self-start text-white-800">No Results</h3>
  )
}

export default Header