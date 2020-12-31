const mediaQuery = {
  size(size) {
    const sizes = {
      xs: '420px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    }
    return `@media (min-width: ${sizes[size]})`
  }
}

export default mediaQuery;