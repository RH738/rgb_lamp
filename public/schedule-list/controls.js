$('document').ready(function() {
    $('#colorPicker').val('#' + 0xFFFFFF.toString(16))
    $('#startDatePicker').datetimepicker({
        locale: 'en-gb',
        defaultDate: 'moment'
    });
    $('#endDatePicker').datetimepicker({
        locale: 'en-gb',
        defaultDate: 'moment',
        useCurrent: false
    });
    $('#startDatePicker').on("dp.change", function(e) {
        $('#endDatePicker').data("DateTimePicker").minDate(e.date);
    });

    $('#endDatePicker').on("dp.change", function(e) {
        $('#startDatePicker').data("DateTimePicker").maxDate(e.date);
    });

    function random(min, max) {
        return Math.floor(Math.random() * (max - min) + 1) + min;
    }
})
