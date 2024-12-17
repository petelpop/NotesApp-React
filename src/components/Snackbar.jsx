import React, { useState, useEffect } from "react";

function Snackbar({ message, visible, onClose }) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose(); // Tutup snackbar setelah 3 detik
      }, 3000);
      return () => clearTimeout(timer); // Bersihkan timeout saat unmount
    }
  }, [visible, onClose]);

  return (
    <div id="snackbar" className={visible ? "show" : ""}>
      {message}
    </div>
  );
}

export default Snackbar;
