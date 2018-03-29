<div id="mega-slider" class="carousel slide " data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
        @foreach ($apartment->sliders as $img_key => $image)
            <li data-target="#mega-slider" data-slide-to="0" class="{{ ($img_key == 0) ? 'active':'' }}"></li>
        @endforeach
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
        @foreach ($apartment->sliders as $img_key => $image)
            <div class="item {{ ($img_key == 0) ? 'active beactive':'' }}">
                <img src="{{ asset($image->path) }}">
            </div>
        @endforeach
    </div>

    <!-- Controls -->
    <a class="left carousel-control" href="#mega-slider" role="button" data-slide="prev">
    </a>
    <a class="right carousel-control" href="#mega-slider" role="button" data-slide="next">
    </a>
</div>
