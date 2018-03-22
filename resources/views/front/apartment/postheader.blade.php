<div id="mega-slider" class="carousel slide " data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
        <li data-target="#mega-slider" data-slide-to="0" class="active"></li>
        <li data-target="#mega-slider" data-slide-to="1"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
        <div class="item active beactive">
            <img src="{{ asset('images/slide-2.png') }}" alt="...">
        </div>
        <div class="item">
            <img src="{{ asset('images/slide-4.png') }}" alt="...">
        </div>
    </div>

    <!-- Controls -->
    <a class="left carousel-control" href="#mega-slider" role="button" data-slide="prev">
    </a>
    <a class="right carousel-control" href="#mega-slider" role="button" data-slide="next">
    </a>
</div>
