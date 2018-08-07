<input type="hidden" id="txt-id_user" value="@isset($user){{ $user->id_user }}@endisset" />
<div class="row">
    <div class="col-xs-12 text-right">
        <span class="btn btn-primary save-user">
            <i class="fa fa-save"></i>
            Save
        </span>
    </div>
</div>
<br />
<div class="row" id="container-form-user" data-link="{{ route('dashboard.users') }}">
    <div class="col-xs-12">
        <div class="panel panel-default">
            <div class="panel-heading">Information</div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-xs-12 col-md-6">
                        <div class="panel panel-info">
                            <div class="panel-body">
                                <div role="form" class="form-horizontal form-information">
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Firstname (*)</label>
                                        <div class="col-sm-9">
                                            <input type="text" required class="form-control txt-firstname" autocomplete="off" placeholder="User firstname" value="@isset($user){{ $user->firstname }}@endisset">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Lastname (*)</label>
                                        <div class="col-sm-9">
                                            <input type="text" required class="form-control txt-lastname" autocomplete="off" placeholder="User lastname" value="@isset($user){{ $user->lastname }}@endisset">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Email (*)</label>
                                        <div class="col-sm-9">
                                            <input type="text" required class="form-control txt-email" autocomplete="off" placeholder="User lastname" value="@isset($user){{ $user->email }}@endisset">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Password (*)</label>
                                        <div class="col-sm-9">
                                            <input type="password" class="form-control txt-password" autocomplete="off" placeholder="" value="">
                                            @isset($user)
                                            <small>Set password for change; if not want change, leave empty</small>
                                            @endisset
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Phone (*)</label>
                                        <div class="col-sm-9">
                                            <input type="text" required class="form-control txt-phone" autocomplete="off" placeholder="Phone" value="@isset($user){{ $user->phone }}@endisset">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Birthdate</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control txt-birthdate" autocomplete="off" placeholder="AAAA-MM-DD" value="@isset($user){{ $user->birthdate }}@endisset">
                                            <small>Format: AAAA-MM-DD</small>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Gender</label>
                                        <div class="col-sm-9">
                                            <select class="form-control lst-gender" >
                                                <option value="MALE" @if (isset($user) && $user->gender == 'MALE') selected @endif>Male</option>
                                                <option value="FEMALE" @if (isset($user) && $user->gender == 'FEMALE') selected @endif>Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Role</label>
                                        <div class="col-sm-9">
                                            <select class="form-control lst-role">
                                                <option value="USER" @if (isset($user) && $user->role == 'USER') selected @endif>User</option>
                                                <option value="ADMIN" @if (isset($user) && $user->role == 'ADMIN') selected @endif>Administrator</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<br />
<div class="row">
    <div class="col-xs-12 text-right">
        <span class="btn btn-primary save-user">
            <i class="fa fa-save"></i>
            Save
        </span>
    </div>
</div>