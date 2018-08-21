<div class="row" id="container-rates">
    <div class="col-md-12">
        <div role="search" class="app-search app-search-list pull-right">
            <input type="text" placeholder="Search..." class="form-control"> <a href=""><i class="fa fa-search"></i></a>
        </div>
        <div class="white-box">
            <h3 class="box-title">Rates</h3>
            <div class="table-responsive">
                <table id="table-rates" class="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Nigths</th>
                            <th>Discount</th>
                            <th class="text-center">
                                <a class="btn btn-default" href="{{ route('dashboard.rate.create') }}">
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