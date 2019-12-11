<template>
    <!-- *****CONFIGURE STYLE (REMOVE ON YOUR PRODUCTION SITE)****** -->  
    <div id="config-panel" class="config-panel d-none d-lg-block">
        <div class="panel-inner">
            <a id="config-trigger" class="config-trigger config-panel-hide text-center"><i class="fas fa-cog fa-spin mx-auto" data-fa-transform="down-6" ></i></a>
            <h5 class="panel-title">Choose Colour</h5>
            <ul id="color-options" class="list-inline mb-0">
                <li class="theme-1 active list-inline-item"><a data-style="../static/css/theme-1.css" href="#"></a></li>
                <li class="theme-2  list-inline-item"><a data-style="../static/css/theme-2.css" href="#"></a></li>
                <li class="theme-3  list-inline-item"><a data-style="../static/css/theme-3.css" href="#"></a></li>
                <li class="theme-4  list-inline-item"><a data-style="../static/css/theme-4.css" href="#"></a></li>
                <li class="theme-5  list-inline-item"><a data-style="../static/css/theme-5.css" href="#"></a></li>
                <li class="theme-6  list-inline-item"><a data-style="../static/css/theme-6.css" href="#"></a></li>
                <li class="theme-7  list-inline-item"><a data-style="../static/css/theme-7.css" href="#"></a></li>
                <li class="theme-8  list-inline-item"><a data-style="../static/css/theme-8.css" href="#"></a></li>
            </ul>
            <a id="config-close" class="close" href="#"><i class="fa fa-times-circle"></i></a>
        </div><!--//panel-inner-->
    </div><!--//configure-panel-->
</template>

<script>
    //import Vue from 'vue'
    import $ from 'jquery'

    // export default {
    //     data() {
    //         return {
    //             show: false
    //         }
    //     },
    //     methods: {
    //         ConfigTrigger() {
    //             if (this.show) {
    //                 this.animate({
    //                     right: "-=190" //same as the panel width
    //                 }, 500);
    //             } else {
    //                 this.animate({
    //                     right: "+=190" //same as the panel width
    //                 }, 500);
    //             }
    //             this.show = !this.show;
    //         }
    //     },
    // }
export default {}
$(document).ready(function() {
    /* ======= DEMO THEME CONFIG ====== */
	$('#config-trigger').click(function(e){
    	
		e.preventDefault();
		
		//$("#config-panel").toggleClass('config-panel-open');
		
		if($(this).hasClass('config-panel-open')){
          $("#config-panel").animate({
            right: "-=190" //same as the panel width
           }, 500);
          $(this).removeClass('config-panel-open').addClass('config-panel-hide');
         }
         else {      
         $("#config-panel").animate({
           right: "+=190" //same as the panel width
           }, 500);
          $(this).removeClass('config-panel-hide').addClass('config-panel-open');    
         }
	});
    
    $('#config-close').on('click', function(e) {
        e.preventDefault();
        $('#config-trigger').click();
    });
    
    
    $('#color-options a').on('click', function(e) { 
        var $styleSheet = $(this).attr('data-style');
        
		$('#theme-style').attr('href', $styleSheet);
				
		var $listItem = $(this).closest('li');
		$listItem.addClass('active');
		$listItem.siblings().removeClass('active');
		
		e.preventDefault();
		
		
	});


});
</script>