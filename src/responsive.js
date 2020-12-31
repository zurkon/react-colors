const mediaQuery = {
  size(size) {
    const sizes = {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    }
    return `@media (min-width: ${sizes[size]})`
  }
}

export default mediaQuery;