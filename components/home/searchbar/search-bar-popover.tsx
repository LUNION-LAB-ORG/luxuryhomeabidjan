import { useEffect, useRef, useState } from "react";

export default function SerchBarPopover({}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Menu</button>
      {isOpen && (
        <div
          ref={menuRef}
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            marginTop: "0.5rem",
          }}
        >
          Je suis le menu
        </div>
      )}
    </div>
  );
}
