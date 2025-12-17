fetch("http://localhost:3000/regalos")
  .then(res => res.json())
  .then(data => {
    const tabla = document.getElementById("tabla");
    data.forEach(r => {
      tabla.innerHTML += `
        <tr>
          <td>${r.nombre}</td>
          <td>${r.destinatario}</td>
          <td>€${r.precio}</td>
          <td>${r.categoria}</td>
          <td>${r.fecha}</td>
        </tr>
      `;
    });
  });
