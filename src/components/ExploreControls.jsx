const categories = ['All', 'Nature', 'Adventure', 'Beach', 'Culture', 'City']

function ExploreControls({ searchTerm, onSearchChange, selectedCategory, onCategoryChange, sortOption, onSortChange }) {
  return (
    <div className="hero-search-bar">
      <label className="hero-search-input">
        <span className="search-icon" aria-hidden="true">⌕</span>
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search destinations..."
          aria-label="Search destinations"
        />
      </label>

      <label className="hero-search-select">
        <span className="select-icon" aria-hidden="true">◈</span>
        <select value={selectedCategory} onChange={(event) => onCategoryChange(event.target.value)} aria-label="Filter by category">
          {categories.map((category) => <option key={category} value={category}>{category === 'All' ? 'All Categories' : category}</option>)}
        </select>
      </label>

      <label className="hero-search-select sort-select">
        <span className="select-icon" aria-hidden="true">↕</span>
        <select value={sortOption} onChange={(event) => onSortChange(event.target.value)} aria-label="Sort destinations">
          <option value="recommended">Recommended</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </label>

      <a className="hero-search-submit" href="#destinations"><span aria-hidden="true">⌕</span> Search</a>
    </div>
  )
}

export default ExploreControls
