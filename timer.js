let timerId = null;

function startTimer()
{
    clearInterval(timerId);
    let date = document.getElementById('date').value
    let deadline = new Date(date).setHours(0)
    const currentDate = new Date()

        if (deadline < currentDate)
        {
            document.getElementById('timer').style.display = 'none'
            document.getElementById('error').style.display = 'block'
        }
        else
        {
            document.getElementById('timer').style.display = 'block'
            document.getElementById('error').style.display = 'none'
            //функция склонения числительных
            function declensions(num, words)
            {
                return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
            }

            function countdownTimer()
             {

                 const timeMs = deadline - new Date();
                 if (timeMs <= 0)
                    {
                    clearInterval(timerId);
                    document.getElementById('timer').style.display = 'none'
                    document.getElementById('end').style.display = 'block'
                    }

                const days = timeMs > 0 ? Math.floor(timeMs / 1000 / 60 / 60 / 24) : 0;
                const hours = timeMs > 0 ? Math.floor(timeMs / 1000 / 60 / 60) % 24 : 0;
                const minutes = timeMs > 0 ? Math.floor(timeMs / 1000 / 60) % 60 : 0;
                const seconds = timeMs > 0 ? Math.floor(timeMs / 1000) % 60 : 0;
                $days.textContent = days < 10 ? '0' + days : days;
                $hours.textContent = hours < 10 ? '0' + hours : hours;
                $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
                $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
                $days.dataset.title = declensions(days, ['день', 'дня', 'дней']);
                $hours.dataset.title = declensions(hours, ['час', 'часа', 'часов']);
                $minutes.dataset.title = declensions(minutes, ['минута', 'минуты', 'минут']);
                $seconds.dataset.title = declensions(seconds, ['секунда', 'секунды', 'секунд']);
            }

            const $days = document.querySelector('.timer__days');
            const $hours = document.querySelector('.timer__hours');
            const $minutes = document.querySelector('.timer__minutes');
            const $seconds = document.querySelector('.timer__seconds');
            countdownTimer();
            timerId = setInterval(countdownTimer, 1000);
        }
    }

