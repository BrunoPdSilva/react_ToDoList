import "./modal.css";

export function Modal({ children }) {
  return (
    <div className="modal-container">
      <div className="modal-backdrop">
        <div className="modal">
          {children}
        </div>
      </div>
    </div>
  );
}
