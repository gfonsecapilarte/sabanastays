<div id="container-web">
    <div class="row" id="row-header-module" data-id-header-module="@isset($header_module){{ $header_module->id_header_module }}@endisset">
        <div class="col-md-6">
            <div class="white-box">
                <h2>Header Module</h2>
                <div class="row">
                    <div class="col-xs-6">
                        <h3>Logo</h3>
                        <form action="{{ route('dashboard.media.create') }}" id="form-header_logo" class="dropzone">
                            <div class="fallback">
                                <input id="fl-media_logo" name="media_logo" type="file" />
                            </div>
                        </form>
                    </div>
                    <div class="col-xs-6">
                        <h3>Background</h3>
                        <form action="{{ route('dashboard.media.create') }}" id="form-header_background" class="dropzone">
                            <div class="fallback">
                                <input id="fl-media_background" name="media_background" type="file" />
                            </div>
                        </form>
                    </div>
                    <div class="remove_media hidden">
                        @if (!is_null($header_module->media_background))
                        <input type="hidden" class="media-header_module" data-form="header_background" data-id_media="{{ $header_module->media_background->id_media }}" data-path="{{ $header_module->media_background->path }}"/>
                        @endif
                        @if (!is_null($header_module->media_logo))
                        <input type="hidden" class="media-header_module" data-form="header_logo" data-id_media="{{ $header_module->media_logo->id_media }}" data-path="{{ $header_module->media_logo->path }}"/>
                        @endif
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-xs-12 text-right">
                        <span class="btn btn-primary save-header-module">
                            <i class="fa fa-save"></i>
                            Save
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row" id="row-home-module" data-id-home-module="@isset($home_module){{ $home_module->id_home_module }}@endisset">
        <div class="col-xs-12">
            <div class="white-box">
                <h2>Home Module</h2>
                <div class="row">
                    @foreach ($languages as $language)
                    <div class="col-xs-12 col-md-6">
                        <div class="panel panel-default">
                            <div class="panel-heading">{{ $language->name }}</div>
                            <div class="panel-body">
                                <div role="form" class="form-horizontal form-information" data-id_language="{{ $language->id_lang }}">
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Title</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control txt-name" placeholder="Site title" value="@isset($home_module){{ $home_module->lang[$language->iso]->title }}@endisset">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Description</label>
                                        <div class="col-sm-9">
                                            <textarea class="form-control txt-description" placeholder="Site description">@isset($home_module){{ $home_module->lang[$language->iso]->description }}@endisset</textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <h3>
                            Media slider
                        </h3>
                        <small>Recomended size: 1900x900</small>
                        <form action="{{ route('dashboard.media.create') }}" id="form-home_media" class="dropzone">
                            <div class="fallback">
                                <input id="fl-home_media" name="home_media" type="file" />
                            </div>
                        </form>
                        <div class="remove_media hidden">
                            @foreach ($home_module->sliders as $slider)
                            <input type="hidden" class="media-home_module" data-id_media="{{ $slider->id_media }}" data-path="{{ $slider->path }}"/>
                            @endforeach
                        </div>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-xs-12 text-right">
                        <span class="btn btn-primary save-home-module">
                            <i class="fa fa-save"></i>
                            Save
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row" id="row-home_about-module" data-id-home_about-module="@isset($home_about_module){{ $home_about_module->id_home_about_module }}@endisset">
        <div class="col-xs-12">
            <div class="white-box">
                <h2>Home About Module</h2>
                <div class="row">
                    @foreach ($languages as $language)
                    <div class="col-xs-12 col-md-6">
                        <div class="panel panel-default">
                            <div class="panel-heading">{{ $language->name }}</div>
                            <div class="panel-body">
                                <div role="form" class="form-horizontal form-information" data-id_language="{{ $language->id_lang }}">
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Title</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control txt-name" placeholder="Title" value="@isset($home_about_module){{ $home_about_module->lang[$language->iso]->title }}@endisset">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Description</label>
                                        <div class="col-sm-9">
                                            <textarea class="form-control txt-description" placeholder="Description">@isset($home_about_module){{ $home_about_module->lang[$language->iso]->description }}@endisset</textarea>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Video URL</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control txt-video_url" placeholder="Title" value="@isset($home_about_module){{ $home_about_module->lang[$language->iso]->video_url }}@endisset">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
                <br />
                <div class="row">
                    <div class="col-xs-12 text-right">
                        <span class="btn btn-primary save-home_about-module">
                            <i class="fa fa-save"></i>
                            Save
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row" id="row-contact-module" data-id-contact-module="@isset($contact_module){{ $contact_module->id_contact_module }}@endisset">
        <div class="col-xs-12">
            <div class="white-box">
                <h2>Contact Us Module</h2>
                <hr/>
                <div class="row">
                    <div class="col-xs-12">
                        <h3>Location</h3>
                    </div>
                    <div class="col-xs-6">
                        <div role="form" class="form-horizontal form-location" data-id_language="{{ $language->id_lang }}">
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Latitude</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control txt-lat" placeholder="Latitude" value="@isset($contact_module){{ $contact_module->lat }}@endisset">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Longitude</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control txt-lng" placeholder="Longitude" value="@isset($contact_module){{ $contact_module->lng }}@endisset">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div class="row">
                    <div class="col-xs-12">
                        <h3>Information</h3>
                    </div>
                    @foreach ($languages as $language)
                    <div class="col-xs-12 col-md-6">
                        <div class="panel panel-default">
                            <div class="panel-heading">{{ $language->name }}</div>
                            <div class="panel-body">
                                <div role="form" class="form-horizontal form-information" data-id_language="{{ $language->id_lang }}">
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Title</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control txt-title" placeholder="Title" value="@isset($contact_module){{ $contact_module->lang[$language->iso]->title }}@endisset">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Description</label>
                                        <div class="col-sm-9">
                                            <textarea class="form-control txt-description" placeholder="Description">@isset($contact_module){{ $contact_module->lang[$language->iso]->description }}@endisset</textarea>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Address</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control txt-address" placeholder="Address" value="@isset($contact_module){{ $contact_module->lang[$language->iso]->address }}@endisset">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Phone</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control txt-phone" placeholder="Phone" value="@isset($contact_module){{ $contact_module->lang[$language->iso]->phone }}@endisset">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">E-mail</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control txt-email" placeholder="E-mail" value="@isset($contact_module){{ $contact_module->lang[$language->iso]->email }}@endisset">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
                <br />
                <div class="row">
                    <div class="col-xs-12 text-right">
                        <span class="btn btn-primary save-contact-module">
                            <i class="fa fa-save"></i>
                            Save
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row" id="row-about-module" data-id-about-module="@isset($about_module){{ $about_module->id_about_module }}@endisset">
        <div class="col-xs-12">
            <div class="white-box">
                <h2>About Us Module</h2>
                <div class="row">
                    @foreach ($languages as $language)
                    <div class="col-xs-12 col-md-6">
                        <div class="panel panel-default">
                            <div class="panel-heading">{{ $language->name }}</div>
                            <div class="panel-body">
                                <div role="form" class="form-horizontal form-information" data-id_language="{{ $language->id_lang }}">
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Title</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control txt-name" placeholder="Title" value="@isset($about_module){{ $about_module->lang[$language->iso]->title }}@endisset">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Description</label>
                                        <div class="col-sm-9">
                                            <textarea class="form-control txt-description" placeholder="Description">@isset($about_module){{ $about_module->lang[$language->iso]->description }}@endisset</textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12">
                                        <h3>Media</h3>
                                        <form action="{{ route('dashboard.media.create') }}" data-id="about_media_{{ $language->id_lang }}"
                                              id="form-about_media_{{ $language->id_lang }}" data-id_lang="{{ $language->id_lang }}" class="dropzone about_media">
                                            <div class="fallback">
                                                <input id="fl-about_media_{{ $language->id_lang }}" name="about_media_{{ $language->id_lang }}" type="file" />
                                            </div>
                                        </form>

                                        <div class="remove_media hidden">
                                            @if (isset($about_module) && !is_null($about_module->lang[$language->iso]->media))
                                                <input type="hidden" class="media-about_module media-about_module_{{ $language->id_lang }}"
                                                       data-id_media="{{ $about_module->lang[$language->iso]->media[0]->id_media }}"
                                                       data-path="{{ $about_module->lang[$language->iso]->media[0]->path }}"/>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
                <br />
                <div class="row">
                    <div class="col-xs-12 text-right">
                        <span class="btn btn-primary save-about-module">
                            <i class="fa fa-save"></i>
                            Save
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row" id="row-testimonial-module">
        <div class="col-xs-12">
            <div class="white-box">
                <h2>Testimonial Module</h2>
                <div class="row">
                    @isset ($testimonial_module)
                        @foreach ($testimonial_module as $testimonial)
                            <div class="col-xs-12 col-md-4">
                                <div class="panel panel-default">
                                    <div class="panel-heading">Testimonial #{{ $loop->iteration }}</div>
                                    <div class="panel-body">
                                        <div role="form" class="form-horizontal form-information" data-id_testimonial="{{ $testimonial->id_testimonial_module }}">
                                            <div class="form-group">
                                                <label class="col-sm-3 control-label">Name</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control txt-name" placeholder="Name" value="{{ $testimonial->name }}">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-sm-3 control-label">Company</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control txt-company" placeholder="Company" value="{{ $testimonial->company }}">
                                                </div>
                                            </div>
                                            @foreach ($languages as $language)
                                                <div class="form-group">
                                                    <label class="col-sm-3 control-label">{{ $language->name }}</label>
                                                    <div class="col-sm-9">
                                                        <textarea data-id_language="{{ $language->id_lang }}" class="form-control txt-text" placeholder="Text">{{ $testimonial->lang[$language->iso]->text }}</textarea>
                                                    </div>
                                                </div>
                                            @endforeach
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <h3>Media</h3>
                                                <form action="{{ route('dashboard.media.create') }}"
                                                      data-id="testimonial_media_{{ $testimonial->id_testimonial_module }}"
                                                      id="form-testimonial_media_{{ $testimonial->id_testimonial_module }}"
                                                      class="dropzone testimonial_media">
                                                    <div class="fallback">
                                                        <input id="fl-testimonial_media_" name="testimonial_media_" type="file" />
                                                    </div>
                                                </form>
                                                <div class="remove_media hidden">
                                                    @if (!is_null($testimonial->media))
                                                        <input type="hidden" class="media-testimonial_module testimonial_media_{{ $testimonial->id_testimonial_module }}"
                                                               data-id_media="{{ $testimonial->media[0]->id_media }}"
                                                               data-path="{{ $testimonial->media[0]->path }}"/>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    @endisset
                </div>
                <br />
                <div class="row">
                    <div class="col-xs-12 text-right">
                        <span class="btn btn-primary save-testimonial-module">
                            <i class="fa fa-save"></i>
                            Save
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>