import './Header.css';

export function Header() {
    return (
        <header>
          <nav>
            <li><a href='#' className='first-line'>Logo</a></li>
            <li><a href='#'>Main</a></li>
            <li><a href='#'>Contacts</a></li>
            <li><a href='#'>About</a></li>
          </nav>
          <h1>This is header title</h1>
        </header>
    );
}