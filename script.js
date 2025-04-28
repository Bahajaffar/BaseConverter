// בהאא אבו געפר -326497484
// עומרי ארגמן - 314772351
document.addEventListener('DOMContentLoaded', function () {
    let fromBase = 10;
    let toBase = 16;
  
    document.querySelectorAll('.base-from').forEach(button => {
      button.addEventListener('click', function () {
        document.querySelectorAll('.base-from').forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
        fromBase = parseInt(this.getAttribute('data-base'));
      });
    });
  
    document.querySelectorAll('.base-to').forEach(button => {
      button.addEventListener('click', function () {
        document.querySelectorAll('.base-to').forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
        toBase = parseInt(this.getAttribute('data-base'));
      });
    });
  
    document.getElementById('convertBtn').addEventListener('click', function () {
      const inputValue = document.getElementById('inputNumber').value.trim();
  
      if (!inputValue) {
        alert('אנא הזן מספר');
        return;
      }
  
      if (!isValidForBase(inputValue, fromBase)) {
        alert(`הקלט אינו חוקי עבור בסיס ${fromBase}`);
        return;
      }
  
      try {
        const decimalValue = parseInt(inputValue, fromBase);
        const result = decimalValue.toString(toBase).toUpperCase();
        const fromSub = getSubscript(fromBase);
        const toSub = getSubscript(toBase);
        document.getElementById('result').innerHTML = `תוצאה: ${inputValue}${fromSub} = ${result}${toSub}`;
        document.getElementById('inputNumber').value = '';
      } catch (error) {
        alert('אירעה שגיאה בהמרה. אנא בדוק את הקלט שלך.');
      }
    });
  
    function isValidForBase(input, base) {
      const regex = {
        2: /^[01]+$/,
        8: /^[0-7]+$/,
        10: /^[0-9]+$/,
        16: /^[0-9A-Fa-f]+$/
      };
      return regex[base].test(input);
    }
  
    function getSubscript(base) {
      const subs = {
        '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
        '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉'
      };
      return base.toString().split('').map(d => subs[d]).join('');
    }
  });
  