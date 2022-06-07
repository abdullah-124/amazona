import React from 'react'

export default function Header() {
  return (
    <header className="row">
    <div>
      <a className="brand" href="/">
        amazona
      </a>
    </div>
    <div>
      <a href="/cart">cart</a>
      <a href="/signIn">signin</a>
    </div>
  </header>
  )
}
