<div class="row" id="container-apartments">
    <div class="col-md-12">
        <div role="search" class="app-search app-search-list pull-right">
            <input type="text" placeholder="Search..." class="form-control"> <a href=""><i class="fa fa-search"></i></a>
        </div>
        <div class="white-box">
            <h3 class="box-title">Apartments</h3>
            <div class="table-responsive">
                <table id="table-apartments" class="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Apartment</th>
                            <th>Type</th>
                            <th>Number</th>
                            <th>Price</th>
                            <th class="text-center">
                                <a class="btn btn-default" href="{{ route('dashboard.apartment.create') }}">
                                    <i class="fa fa-plus-square"></i>
                                    Add
                                </a>
                            </th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    </div>
</div>