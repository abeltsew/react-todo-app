import { useState, useEffect, useRef } from 'react';
import { useOnClickOutside } from './useOnClickOutside';
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, dropdown, () => setDropdown(false));

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
  }, [dropdown]);

  return (
    <nav>
      <li>
        <button onClick={() => setDropdown((prev) => !prev)}>
          Services <span>&#8595;</span>
        </button>
        {dropdown && (
          <ul>
            <li>Design</li>
            <li>Development</li>
          </ul>
        )}
      </li>
    </nav>
  );
};
export default Navbar;
