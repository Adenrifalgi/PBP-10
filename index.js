const mahasiswaNim = '11020357';
const updatedData = {
    nama: 'Aden',
    gender: 'L',
    prodi: 'TI',
    alamat: 'JL. Cibolang City'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`,{
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData),
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    const nim = "123477"; // Gantilah dengan nilai yang sesuai
    const baru = {
        nama: 'Aden Rifalgi',
        gender: 'L',
        prodi: 'TI',
        alamat: 'JL. Cibolang City House'
    };
fetch(`http://localhost:3000/mahasiswa/${nim}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ baru }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));