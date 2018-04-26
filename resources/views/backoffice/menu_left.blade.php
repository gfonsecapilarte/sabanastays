<div class="navbar-default sidebar" role="navigation">
    <div class="sidebar-nav navbar-collapse slimscrollsidebar">
        <div class="user-profile">
            <div class="dropdown user-pro-body">
                <div><img src="{{ asset('images/backoffice/logo-min.png') }}" alt="user-img" class="img"></div>
                <a href="#" class="dropdown-toggle u-dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Steave Gection <span class="caret"></span></a>
                <ul class="dropdown-menu animated flipInY">
                    <li><a href="#"><i class="ti-user"></i> My Profile</a></li>
                    <li><a href="#"><i class="ti-wallet"></i> My Balance</a></li>
                    <li><a href="#"><i class="ti-email"></i> Inbox</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#"><i class="ti-settings"></i> Account Setting</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="login.html"><i class="fa fa-power-off"></i> Logout</a></li>
                </ul>
            </div>
        </div>
        <ul class="nav" id="side-menu">
            <li class="sidebar-search hidden-sm hidden-md hidden-lg">
                <!-- input-group -->
                <div class="input-group custom-search-form">
                    <input type="text" class="form-control" placeholder="Search..."> <span class="input-group-btn">
                <button class="btn btn-default" type="button"> <i class="fa fa-search"></i> </button>
                </span>
                </div>
                <!-- /input-group -->
            </li>
            <li>
                <a href="{{ route('dashboard.bookings') }}" class="waves-effect"><i class="linea-icon linea-basic fa-fw" data-icon="v"></i>
                    <span class="hide-menu">Bookings</span>
                </a>
            </li>
            <li>
                <a href="{{ route('dashboard.apartments') }}" class="waves-effect"><i class="linea-icon linea-basic fa-fw" data-icon="v"></i>
                    <span class="hide-menu">Apartments</span>
                </a>
            </li>
            <li>
                <a href="{{ route('dashboard.users') }}" class="waves-effect"><i class="linea-icon linea-basic fa-fw" data-icon="v"></i>
                    <span class="hide-menu">Users</span>
                </a>
            </li>
            <li>
                <a href="{{ route('dashboard.web') }}" class="waves-effect"><i class="linea-icon linea-basic fa-fw" data-icon="v"></i>
                    <span class="hide-menu">Web admin</span>
                </a>
            </li>
            <li>
                <a href="{{ route('dashboard.roles') }}" class="waves-effect"><i class="linea-icon linea-basic fa-fw" data-icon="v"></i>
                    <span class="hide-menu">Roles</span>
                </a>
            </li>


            <li><a href="login.html" class="waves-effect"><i class="icon-logout fa-fw"></i> <span class="hide-menu">Log out</span></a></li>
        </ul>
    </div>
</div>
