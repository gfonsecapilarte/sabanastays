var Users = {
    init: function() {
        if (typeof $('#container-users')[0] === typeof undefined) {
            return;
        }
        Users.clear();
        Users.createEvents();
        Users.getUsers();
    },
    createEvents: function() {
        $('.app-search-list').on('click', 'a', Users.onSearch);
        $('.app-search-list').on('keyup', 'input', Users.onSearch);
    },
    clear: function() {
        $('#table-users tbody').empty();
    },
    getUsers: function(params) {
        var data = $.extend(params,{page: 1 });
        $.ajax({
            url: '/api/user/list',
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: data,
            success: function(response) {
                console.log('>>', response);
                if (response.success) {
                    Users.showResults(response.users)
                } else {
                    alert(response.message);
                }
            }
        });
    },
    onSearch: function(event) {
        event.preventDefault();
        if (event.type === 'click' || (event.type === 'keyup' && event.which === 13)) {
            if ($('.app-search-list input').val() === '') {
                Users.getUsers();
            } else {
                Users.getUsers({term: $('.app-search-list input').val()});
            }
        }
    },
    showResults: function(response) {
        Users.clear();
        $.each(response.data, Users.printRow);
    },
    printRow: function(i, user) {
        var $row = $('<tr/>');

        $('<td/>').appendTo($row).append(
            $('<span/>').addClass('btn btn-link').text('#'+user.id_user).on('click', {user:user}, Users.onView)
        );
        $('<td/>').text(user.firstname+' '+user.lastname).appendTo($row);
        $('<td/>').text(user.email).appendTo($row);
        $('<td/>').text(user.role).appendTo($row);
        $('<td/>').appendTo($row).addClass('text-center').append(
            $('<div/>').addClass('btn-group').attr('role','group').append(
                $('<span/>').addClass('btn btn-default').append(
                    $('<i/>').addClass('fa fa-eye')
                ).on('click', {user:user}, Users.onView),
                $('<a/>').addClass('btn btn-default').attr('href', '/dashboard/user/edit?id_user='+user.id_user).append(
                    $('<i/>').addClass('fa fa-pencil')
                )
            )
        );

        $row.appendTo($('#table-users tbody'));
    },
    onView: function(event) {
        var $modal = Users.buildModal(event.data.user);
        $modal.modal('show');
    },
    buildModal: function(user) {
        var id = 'user-modal-'+user.id_user;
        if (typeof $('#'+id)[0] !== typeof undefined) {
            return $('#'+id);
        }
        var $modal = $('<div/>');
        $modal.attr('id', id).addClass('modal fade user-modal').attr('role','dialog').append(
            $('<div/>').addClass('modal-dialog').attr('role','document').append(
                $('<div/>').addClass('modal-content').append(
                    $('<div/>').addClass('modal-header').append(
                        $('<button/>').attr('type','button').addClass('close').attr('data-dismiss','modal').attr('aria-label','Close').append(
                            $('<span/>').attr('aria-hidden','true').html('&times;')
                        ),
                        $('<h4/>').addClass('modal-title').text('User #'+user.id_user)
                    ),
                    $('<div/>').addClass('modal-body').append(
                        $('<div/>').addClass('row').append(
                            $('<div/>').addClass('col-xs-12').append(
                                $('<h2/>').text('Information'),
                                $('<hr/>'),
                                $('<div />').addClass('row').append(
                                    $('<label/>').addClass('col-xs-4').text('Name'),
                                    $('<span/>').addClass('col-xs-8').text(user.firstname+' '+user.lastname),
                                ),
                                $('<div />').addClass('row').append(
                                    $('<label/>').addClass('col-xs-4').text('E-Mail'),
                                    $('<span/>').addClass('col-xs-8').text(user.email),
                                ),
                                $('<div />').addClass('row').append(
                                    $('<label/>').addClass('col-xs-4').text('Since'),
                                    $('<span/>').addClass('col-xs-8').text(user.since),
                                ),
                                $('<div />').addClass('row').append(
                                    $('<label/>').addClass('col-xs-4').text('Role'),
                                    $('<span/>').addClass('col-xs-8').text(user.role),
                                ),
                                $('<div />').addClass('row').append(
                                    $('<label/>').addClass('col-xs-4').text('Last login'),
                                    $('<span/>').addClass('col-xs-8').text(user.last_login),
                                )
                            )
                        )
                    ),
                    $('<div/>').addClass('modal-footer').append(
                        $('<button/>').attr('type','button').addClass('btn btn-default').attr('data-dismiss','modal').text('Close')
                    )
                )
            )
        ).appendTo($('body'));
        return $modal;
    }
};

$(function() {
    Users.init();
});