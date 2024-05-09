import android.app.DatePickerDialog
import android.os.Bundle
import android.widget.Button
import android.widget.DatePicker
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import java.text.SimpleDateFormat
import java.util.*

class MainActivity : AppCompatActivity() {

    private lateinit var startDateTextView: TextView
    private lateinit var endDateTextView: TextView
    private lateinit var calculateButton: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        startDateTextView = findViewById(R.id.start_date_text_view)
        endDateTextView = findViewById(R.id.end_date_text_view)
        calculateButton = findViewById(R.id.calculate_button)

        // Set initial start date and end date
        val calendar = Calendar.getInstance()
        val dateFormat = SimpleDateFormat("dd/MM/yyyy", Locale.getDefault())
        startDateTextView.text = dateFormat.format(calendar.time)

        // Add 28 days to the start date to set the end date
        calendar.add(Calendar.DAY_OF_MONTH, 28)
        endDateTextView.text = dateFormat.format(calendar.time)

        // Set click listeners
        startDateTextView.setOnClickListener {
            showDatePickerDialog(startDateTextView)
        }

        endDateTextView.setOnClickListener {
            showDatePickerDialog(endDateTextView)
        }

        calculateButton.setOnClickListener {
            calculatePeriodDates()
        }
    }

    private fun showDatePickerDialog(textView: TextView) {
        val calendar = Calendar.getInstance()
        val datePickerDialog = DatePickerDialog(
            this,
            DatePickerDialog.OnDateSetListener { _: DatePicker, year: Int, month: Int, dayOfMonth: Int ->
                val selectedDate = Calendar.getInstance()
                selectedDate.set(year, month, dayOfMonth)
                val dateFormat = SimpleDateFormat("dd/MM/yyyy", Locale.getDefault())
                textView.text = dateFormat.format(selectedDate.time)
            },
            calendar.get(Calendar.YEAR),
            calendar.get(Calendar.MONTH),
            calendar.get(Calendar.DAY_OF_MONTH)
        )
        datePickerDialog.show()
    }

    private fun calculatePeriodDates() {
        // Parse start date and end date
        val dateFormat = SimpleDateFormat("dd/MM/yyyy", Locale.getDefault())
        val startDate = dateFormat.parse(startDateTextView.text.toString())!!
        val endDate = dateFormat.parse(endDateTextView.text.toString())!!

        // Calculate next period date
        val nextPeriodDate = Calendar.getInstance()
        nextPeriodDate.time = endDate
        nextPeriodDate.add(Calendar.DAY_OF_MONTH, 1)

        // Display next period date
        val nextPeriodDateString = dateFormat.format(nextPeriodDate.time)
        val message = "Next period date: $nextPeriodDateString"
        // You can display this message in a TextView or send a notification
        // For simplicity, let's just log it
        println(message)
    }
}
