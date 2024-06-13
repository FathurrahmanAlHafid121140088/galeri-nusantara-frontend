const listpostpage = () => {
    return `
        <div class="dashboard-sidebar">
    <div class="sidebar" id="sidebar">
        <ul>
            <li><a href="#/dashboard">Dashboard</a></li>
            <li><a href="#">Daftar Postingan</a></li>
            <li><a href="#">Update Contributor</a></li>
            <li><a href="#/update-postingan">Update Postingan</a></li>
        </ul>
    </div>

        <div class="main-content">
    <div class="content">
        <h1>Welcome to the Dashboard, Contributor</h1>
        <p>This is a simple responsive sidebar example.</p>
    </div>
        <div class="table-container">
        <h2>Daftar Postingan</h2>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Judul Postingan</th>
                    <th>Order No</th>
                    <th>Product Cost</th>
                    <th>Project</th>
                    <th>Payment Mode</th>
                    <th>Start Date</th>
                    <th colspan="2">Payment Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox"></td>
                    <td><img src="profile1.jpg" alt="Henry Klein"> Henry Klein</td>
                    <td>02312</td>
                    <td>$14,500</td>
                    <td>Dashboard</td>
                    <td>Credit card</td>
                    <td>04 Dec 2019</td>
                    <td><a href="#/update-postingan"><button class="edit">Edit</button></a></td>
                    <td><button class="hapus">Hapus</button></td>
                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td><img src="profile2.jpg" alt="Estella Bryan"> Estella Bryan</td>
                    <td>02312</td>
                    <td>$14,500</td>
                    <td>Website</td>
                    <td>Cash on delivered</td>
                    <td>04 Dec 2019</td>
                                        <td><a href="#/update-postingan"><button class="edit">Edit</button></a></td>
                    <td><button class="hapus">Hapus</button></td>
                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td><img src="profile3.jpg" alt="Lucy Abbott"> Lucy Abbott</td>
                    <td>02312</td>
                    <td>$14,500</td>
                    <td>App design</td>
                    <td>Credit card</td>
                    <td>04 Dec 2019</td>
                    <td><a href="#/update-postingan"><button class="edit">Edit</button></a></td>
                    <td><button class="hapus">Hapus</button></td>
                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td><img src="profile4.jpg" alt="Peter Gill"> Peter Gill</td>
                    <td>02312</td>
                    <td>$14,500</td>
                    <td>Development</td>
                    <td>Online Payment</td>
                    <td>04 Dec 2019</td>
                    <td><a href="#/update-postingan"><button class="edit">Edit</button></a></td>
                    <td><button class="hapus">Hapus</button></td>
                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td><img src="profile5.jpg" alt="Sallie Reyes"> Sallie Reyes</td>
                    <td>02312</td>
                    <td>$14,500</td>
                    <td>Website</td>
                    <td>Credit card</td>
                    <td>04 Dec 2019</td>
                    <td><a href="#/update-postingan"><button class="edit">Edit</button></a></td>
                    <td><button class="hapus">Hapus</button></td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
    </div>


        `;
  };
  
  export default listpostpage;