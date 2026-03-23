const balance = 1000
const ussd = prompt("Enter Ussd code");
if (ussd == "*301#") {
  // First Section the users sees
  const ussdPrompt = prompt(
    "1 Data Plans \n" +
      "2 Recharge \n" +
      "3 Borrow Airtime \n" +
      "4 Acct bal \n" +
      "5 Data bal \n" +
      "* Next Page \n" +
      "Reply \n",
  );
  // Data Plans Section
  if (ussdPrompt == 1) {
    const dataPlans = prompt(
      "1 \u20A62000/13GB/7dys \n" +
        "2 \u20A63000/20GB/7dys \n" +
        "3 Data Plans \n" +
        "4 10GB @\u20A63000 \n" +
        "5 5GB @\u20A61500 \n" +
        "6 3GB @\u20A6750 \n" +
        "7 1.5GB @\u20A6500 \n" +
        "8 2GB @\u20A6600 \n" +
        "9 6GB @\u20A62500 \n" +
        "* Next",
    );
    if (dataPlans == 1) {
      alert(
        "MMI Complete. Data plan 13GB for \u20A62000 for 7days was successful",
      );
    } else if (dataPlans == 2) {
      alert(
        "MMI Complete. Data plan 20GB for \u20A63000 for 7days was successful",
      );
    } else if (dataPlans == 3) {
      const plans = prompt(
          "1 Daily Plans \n" +
          "2 Binge Plans \n" +
          "3 Weekly Plans \n" +
          "4 Monthly Plans \n" +
          "5 Big Monthly Plans \n" +
          "6 3Months+ Plans \n" +
          "7 Social Plans \n" +
          "8 Everyday Plans \n" +
          "22 Back \n" +
          "0 Menu",
      );
      if (plans == '1') {
        const dailyPlans = prompt(
          "Daily Plan \n" +
          "1 300MB @\u20A6300 \n" +
          "2 230MB @\u20A6200 \n" +
          "3 110MB @\u20A6100 \n" +
          "4 75MB @\u20A675 \n" +
          "5 250MB @\u20A650 \n" +
          "6 500MB @\u20A6350 \n" +
          "7 Binge Plans \n" +
          "22 Back \n" +
          "0 Menu" 
        )
        if (dailyPlans == "1") {
          const daily300MB = prompt(
            "300MB Daily @\u20A6300 (2days). Select how to pay: \n" +
            "1 With Airtime - \u20A6300 \n" +
            "2 With Smartcash - \u20A6270 \n" +
            "22 Back \n" +
            "0 Menu" 
          )
          if (daily300MB == "1") {
            const price = 300
            const dataPlan300MB = prompt(
              "300MB Daily @\u20A6300 (2days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan300MB == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 300MB @\u20A6300 for 2days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan300MB == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 300MB @\u20A6300 for 2days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan300MB == '3') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 300MB @\u20A6300 for 2days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan300MB == '22') { // back code remains
              alert("Back")
            } else if (dataPlan300MB == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (daily300MB == "2") {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you.")
          } else if (daily300MB == "22") {
            alert("back")
          } else if (daily300MB == "0") {
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
        } else if (dailyPlans == "2") {
          const daily200MB = prompt(
            "230MB Daily @\u20A6200 (2days). Select how to pay: \n" +
            "1 With Airtime - \u20A6200 \n" +
            "2 With Smartcash - \u20A61800 \n" +
            "22 Back \n" +
            "0 Menu" 
          )
          if (daily200MB == "1") {
            const price = 200
            const dataPlan230MB = prompt(
              "230MB Daily @\u20A6200 (2days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan230MB == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 230MB @\u20A6200 for 2days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan230MB == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 230MB @\u20A6200 for 2days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan230MB == '3') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 230MB @\u20A6200 for 2days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan230MB == '22') { // back code remains
              alert("Back")
            } else if (dataPlan230MB == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (daily200MB == "2") {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you.")
          } else if (daily200MB == "22") {
            alert("back")
          } else if (daily200MB == "0") {
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
        } else if (dailyPlans == "3") {
          const daily110MB = prompt(
            "110MB Daily @\u20A6100 (1day). Select how to pay: \n" +
            "1 With Airtime - \u20A6100 \n" +
            "2 With Smartcash - \u20A690 \n" +
            "22 Back \n" +
            "0 Menu" 
          )
          if (daily110MB == "1") {
            const price = 100
            const dataPlan110MB = prompt(
              "300MB Daily @\u20A6300 (2days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan110MB == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 110MB @\u20A6100 for 1day was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan110MB == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 110MB @\u20A6100 for 1day was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan110MB == '3') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 110MB @\u20A6100 for 1day to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan110MB == '22') { // back code remains
              alert("Back")
            } else if (dataPlan110MB == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (daily110MB == "2") {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you.")
          } else if (daily110MB == "22") {
            alert("back")
          } else if (daily110MB == "0") {
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
        } else if (dailyPlans == "4") {
          const daily75MB = prompt(
            "75MB Daily @\u20A675 (1day). Select how to pay: \n" +
            "1 With Airtime - \u20A675 \n" +
            "2 With Smartcash - \u20A667.50 \n" +
            "22 Back \n" +
            "0 Menu" 
          )
          if (daily75MB == "1") {
            const price = 75
            const dataPlan75MB = prompt(
              "75MB Daily @\u20A675 (1day) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan75MB == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 75MB @\u20A675 for 1day was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan75MB == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 75MB @\u20A675 for 1day was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan75MB == '3') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 75MB @\u20A675 for 1day to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan75MB == '22') { // back code remains
              alert("Back")
            } else if (dataPlan75MB == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (daily75MB == "2") {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you.")
          } else if (daily75MB == "22") {
            alert("back")
          } else if (daily75MB == "0") {
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
        } else if (dailyPlans == "5") {
          const daily250MB = prompt(
            "250MB Daily @\u20A6300 (1day). Select how to pay: \n" +
            "1 With Airtime - \u20A650 \n" +
            "2 With Smartcash - \u20A645 \n" +
            "22 Back \n" +
            "0 Menu" 
          )
          if (daily250MB == "1") {
            const price = 50
            const dataPlan250MB = prompt(
              "250MB Daily @\u20A650 (1day) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan250MB == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 250MB @\u20A650 for 1day was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan250MB == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 250MB @\u20A650 for 1day was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan250MB == '3') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 250MB @\u20A650 for 1day to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan250MB == '22') { // back code remains
              alert("Back")
            } else if (dataPlan250MB == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (daily250MB == "2") {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you.")
          } else if (daily250MB == "22") {
            alert("back")
          } else if (daily250MB == "0") {
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
        } else if (dailyPlans == "6") {
          const daily500MB = prompt(
            "500MB Daily @\u20A6350 (1day). Select how to pay: \n" +
            "1 With Airtime - \u20A6350 \n" +
            "2 With Smartcash - \u20A6315 \n" +
            "22 Back \n" +
            "0 Menu" 
          )
          if (daily500MB == "1") {
            const price = 350
            const dataPlan500MB = prompt(
              "500MB Daily @\u20A6350 (1day) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan500MB == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 500MB @\u20A6350 for 1day was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan500MB == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 500MB @\u20A6350 for 1day was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan500MB == '3') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 500MB @\u20A6350 for 1day to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan500MB == '22') { // back code remains
              alert("Back")
            } else if (dataPlan500MB == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (daily500MB == "2") {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you.")
          } else if (daily500MB == "22") {
            alert("back")
          } else if (daily500MB == "0") {
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
        } else if (dailyPlans == "7") {
          const bingePlans = prompt(
            "1 5GB @\u20A61500 \n" +
            "2 3.2GB @\u20A61000 \n" +
            "3 3GB @\u20A6750 \n" +
            "4 2GB @\u20A6600 \n" +
            "5 1.5GB @\u20A6500 \n" +
            "6 Weekly Plans \n" +
            "22 Back \n" +
            "0 Menu" 
          )
          if (bingePlans == "1") {
            const price = 1500
            const dataPlan5Gb = prompt(
              "5GB @\u20A61500 + 2GB YT Night + 200MB YT,IG &Tiktok (2days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan5Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 5GB @\u20A61500 for 2days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan5Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 5GB @\u20A61500 for 2days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan5Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (dataPlan5Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 5GB @\u20A61500 for 2days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan5Gb == '22') { // back code remains
              alert("Back")
            } else if (dataPlan5Gb == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (bingePlans == "2") {
            const price = 1000
            const dataPlan3_2Gb = prompt(
              "3.2GB @\u20A61000 + 2GB YT Night + 200MB YT,IG &Tiktok (2days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan3_2Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 3.2GB @\u20A61000 for 2days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan3_2Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 3.2GB @\u20A61000 for 2days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan3_2Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (dataPlan3_2Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 3.2GB @\u20A61000 for 2days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan3_2Gb == '22') { // back code remains
              alert("Back")
            } else if (dataPlan3_2Gb == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (bingePlans == "3") {
            const price = 750
            const dataPlan3Gb = prompt(
              "3GB @\u20A6750 + 1GB YT Night + 200MB YT,IG &Tiktok (2days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan3Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 3GB @\u20A6750 for 2days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan3Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 3GB @\u20A6750 for 2days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan3Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (dataPlan3Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 3GB @\u20A6750 for 2days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan3Gb == '22') { // back code remains
              alert("Back")
            } else if (dataPlan3Gb == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (bingePlans == "4") {
            const price = 600
            const dataPlan2Gb = prompt(
              "2GB @\u20A6600 + 1GB YT Night + 200MB YT,IG &Tiktok (2days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan2Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 2GB @\u20A6600 for 2days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan2Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 2GB @\u20A6600 for 2days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan2Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (dataPlan2Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 2GB @\u20A6600 for 2days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan2Gb == '22') { // back code remains
              alert("Back")
            } else if (dataPlan2Gb == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (bingePlans == "5") {
            const dataPlan1_5GB = prompt(
              "1.5GB @\u20A6 valid for 1day(24hrs). \n" +
              "Select how to buy. \n" +
              "1 Buy Now \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan1_5GB == "1") {
              const price = 500
              const plan1_5Gb = prompt(
                "1.5GB @\u20A6500 (1day) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (plan1_5Gb == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 1.5GB @\u20A6500 for 1day was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (plan1_5Gb == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 1.5GB @\u20A6500 for 1day was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (plan1_5Gb == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (plan1_5Gb == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 1.5GB @\u20A6500 for 1day to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (plan1_5Gb == '22') { // back code remains
                alert("Back")
              } else if (plan1_5Gb == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (dataPlan1_5GB == "22") {
              alert("Back")
            } else if (dataPlan1_5GB == "0") {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (bingePlans == "6") {
            const weeklyPlan = prompt(
              "Weekly Plan \n" +
              "1 \u20A65000/18GB \n" +
              "2 \u20A63000/10GB \n" +
              "3 \u20A62500/6GB \n" +
              "4 \u20A61500/5GB \n" +
              "5 \u20A61000/1.5GB \n" +
              "6 \u20A6800/1GB \n" +
              "7 \u20A6500/500MB \n" +
              "22 Back\n" +
              "0 Menu"  
            )
            if (weeklyPlan == "1") {
              const price = 5000
              const dataPlan18Gb = prompt(
                "18GB @\u20A65000 + 2GB YT Night + 200MB YT,IG &Tiktok (7days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (dataPlan18Gb == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 18GB @\u20A65000 for 7days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan18Gb == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 18GB @\u20A65000 for 7days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan18Gb == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPlan18Gb == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 18GB @\u20A65000 for 7days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (dataPlan18Gb == '22') { // back code remains
                alert("Back")
              } else if (dataPlan18Gb == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (weeklyPlan == "2") {
              const price = 3000
              const dataPlan10Gb = prompt(
                "10GB @\u20A63000 + 2GB YT Night + 200MB YT,IG &Tiktok (7days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (dataPlan10Gb == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 10GB @\u20A63000 for 7days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan10Gb == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 10GB @\u20A63000 for 7days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan10Gb == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPlan10Gb == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 10GB @\u20A63000 for 7days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (dataPlan10Gb == '22') { // back code remains
                alert("Back")
              } else if (dataPlan10Gb == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (weeklyPlan == "3") {
              const price = 2500
              const dataPlan2Gb = prompt(
                "6GB @\u20A62500 + 2GB YT Night + 200MB YT,IG &Tiktok (2days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (dataPlan2Gb == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 6GB @\u20A62500 for 7days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan2Gb == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 6GB @\u20A62500 for 7days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan2Gb == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPlan2Gb == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 6GB @\u20A62500 for 7days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (dataPlan2Gb == '22') { // back code remains
                alert("Back")
              } else if (dataPlan2Gb == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (weeklyPlan == "4") {
              const price = 1500
              const dataPlan5Gb = prompt(
                "5GB @\u20A61500 + 2GB YT Night + 200MB YT,IG &Tiktok (7days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (dataPlan5Gb == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 5GB @\u20A61500 for 7days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan5Gb == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 5GB @\u20A61500 for 7days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan5Gb == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPlan5Gb == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 5GB @\u20A61500 for 7days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (dataPlan5Gb == '22') { // back code remains
                alert("Back")
              } else if (dataPlan5Gb == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (weeklyPlan == "5") {
              const price = 1000
              const dataPln1_5Gb = prompt(
                "1.5GB @\u20A61000 + 2GB YT Night + 200MB YT,IG &Tiktok (7days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (dataPln1_5Gb == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 1.5GB @\u20A61000 for 7days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPln1_5Gb == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 1.5GB @\u20A61000 for 7days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPln1_5Gb == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPln1_5Gb == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 1.5GB @\u20A61000 for 7days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (dataPln1_5Gb == '22') { // back code remains
                alert("Back")
              } else if (dataPln1_5Gb == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (weeklyPlan == "6") {
              const price = 800
              const dataPln1Gb = prompt(
                "1GB Weekly @\u20A6800 (7days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (dataPln1Gb == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 1GB @\u20A6800 for 7days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPln1Gb == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 1GB @\u20A6800 for 7days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPln1Gb == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPln1Gb == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 1GB @\u20A6800 for 7days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (dataPln1Gb == '22') { // back code remains
                alert("Back")
              } else if (dataPln1Gb == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (weeklyPlan == "7") {
              const price = 500
              const dataPln500MB = prompt(
                "500MB @\u20A6500 (7days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (dataPln500MB == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 500MB @\u20A6500 for 7days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPln500MB == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 500MB @\u20A6500 for 7days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPln500MB == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPln500MB == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 500MB @\u20A6500 for 7days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (dataPln500MB == '22') { // back code remains
                alert("Back")
              } else if (dataPln500MB == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (weeklyPlan == "22") {
              alert("Back")
            } else if (weeklyPlan == "0") {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (bingePlans == "22") {
            alert("Back")
          } else if (bingePlans == "0") {
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
        } else if (dailyPlans == "22") {
          alert("Back")
        } else if (dailyPlans == "0") {
          alert("Menu")
        } else {
          alert("Connection Problem or Invalid MMI Code")
        }
      } else if (plans == '2') {
        const bingePlans = prompt(
            "1 5GB @\u20A61500 \n" +
            "2 3.2GB @\u20A61000 \n" +
            "3 3GB @\u20A6750 \n" +
            "4 2GB @\u20A6600 \n" +
            "5 1.5GB @\u20A6500 \n" +
            "6 Weekly Plans \n" +
            "22 Back \n" +
            "0 Menu" 
          )
          if (bingePlans == "1") {
            const price = 1500
            const dataPlan5Gb = prompt(
              "5GB @\u20A61500 + 2GB YT Night + 200MB YT,IG &Tiktok (2days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan5Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 5GB @\u20A61500 for 2days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan5Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 5GB @\u20A61500 for 2days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan5Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (dataPlan5Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 5GB @\u20A61500 for 2days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan5Gb == '22') { // back code remains
              alert("Back")
            } else if (dataPlan5Gb == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (bingePlans == "2") {
            const price = 1000
            const dataPlan3_2Gb = prompt(
              "3.2GB @\u20A61000 + 2GB YT Night + 200MB YT,IG &Tiktok (2days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan3_2Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 3.2GB @\u20A61000 for 2days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan3_2Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 3.2GB @\u20A61000 for 2days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan3_2Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (dataPlan3_2Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 3.2GB @\u20A61000 for 2days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan3_2Gb == '22') { // back code remains
              alert("Back")
            } else if (dataPlan3_2Gb == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (bingePlans == "3") {
            const price = 750
            const dataPlan3Gb = prompt(
              "3GB @\u20A6750 + 1GB YT Night + 200MB YT,IG &Tiktok (2days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan3Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 3GB @\u20A6750 for 2days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan3Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 3GB @\u20A6750 for 2days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan3Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (dataPlan3Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 3GB @\u20A6750 for 2days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan3Gb == '22') { // back code remains
              alert("Back")
            } else if (dataPlan3Gb == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (bingePlans == "4") {
            const price = 600
            const dataPlan2Gb = prompt(
              "2GB @\u20A6600 + 1GB YT Night + 200MB YT,IG &Tiktok (2days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan2Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 2GB @\u20A6600 for 2days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan2Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 2GB @\u20A6600 for 2days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan2Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (dataPlan2Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 2GB @\u20A6600 for 2days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan2Gb == '22') { // back code remains
              alert("Back")
            } else if (dataPlan2Gb == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (bingePlans == "5") {
            const dataPlan1_5GB = prompt(
              "1.5GB @\u20A6 valid for 1day(24hrs). \n" +
              "Select how to buy. \n" +
              "1 Buy Now \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan1_5GB == "1") {
              const price = 500
              const plan1_5Gb = prompt(
                "1.5GB @\u20A6500 (1day) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (plan1_5Gb == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 1.5GB @\u20A6500 for 1day was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (plan1_5Gb == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 1.5GB @\u20A6500 for 1day was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (plan1_5Gb == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (plan1_5Gb == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 1.5GB @\u20A6500 for 1day to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (plan1_5Gb == '22') { // back code remains
                alert("Back")
              } else if (plan1_5Gb == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (dataPlan1_5GB == "22") {
              alert("Back")
            } else if (dataPlan1_5GB == "0") {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (bingePlans == "6") {
            const weeklyPlan = prompt(
              "Weekly Plan \n" +
              "1 \u20A65000/18GB \n" +
              "2 \u20A63000/10GB \n" +
              "3 \u20A62500/6GB \n" +
              "4 \u20A61500/5GB \n" +
              "5 \u20A61000/1.5GB \n" +
              "6 \u20A6800/1GB \n" +
              "7 \u20A6500/500MB \n" +
              "22 Back\n" +
              "0 Menu"  
            )
            if (weeklyPlan == "1") {
              const price = 5000
              const dataPlan18Gb = prompt(
                "18GB @\u20A65000 + 2GB YT Night + 200MB YT,IG &Tiktok (7days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (dataPlan18Gb == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 18GB @\u20A65000 for 7days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan18Gb == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 18GB @\u20A65000 for 7days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan18Gb == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPlan18Gb == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 18GB @\u20A65000 for 7days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (dataPlan18Gb == '22') { // back code remains
                alert("Back")
              } else if (dataPlan18Gb == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (weeklyPlan == "2") {
              const price = 3000
              const dataPlan10Gb = prompt(
                "10GB @\u20A63000 + 2GB YT Night + 200MB YT,IG &Tiktok (7days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (dataPlan10Gb == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 10GB @\u20A63000 for 7days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan10Gb == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 10GB @\u20A63000 for 7days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan10Gb == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPlan10Gb == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 10GB @\u20A63000 for 7days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (dataPlan10Gb == '22') { // back code remains
                alert("Back")
              } else if (dataPlan10Gb == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (weeklyPlan == "3") {
              const price = 2500
              const dataPlan2Gb = prompt(
                "6GB @\u20A62500 + 2GB YT Night + 200MB YT,IG &Tiktok (2days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (dataPlan2Gb == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 6GB @\u20A62500 for 7days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan2Gb == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 6GB @\u20A62500 for 7days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan2Gb == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPlan2Gb == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 6GB @\u20A62500 for 7days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (dataPlan2Gb == '22') { // back code remains
                alert("Back")
              } else if (dataPlan2Gb == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (weeklyPlan == "4") {
              const price = 1500
              const dataPlan5Gb = prompt(
                "5GB @\u20A61500 + 2GB YT Night + 200MB YT,IG &Tiktok (7days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (dataPlan5Gb == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 5GB @\u20A61500 for 7days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan5Gb == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 5GB @\u20A61500 for 7days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan5Gb == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPlan5Gb == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 5GB @\u20A61500 for 7days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (dataPlan5Gb == '22') { // back code remains
                alert("Back")
              } else if (dataPlan5Gb == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (weeklyPlan == "5") {
              const price = 1000
              const dataPln1_5Gb = prompt(
                "1.5GB @\u20A61000 + 2GB YT Night + 200MB YT,IG &Tiktok (7days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (dataPln1_5Gb == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 1.5GB @\u20A61000 for 7days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPln1_5Gb == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 1.5GB @\u20A61000 for 7days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPln1_5Gb == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPln1_5Gb == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 1.5GB @\u20A61000 for 7days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (dataPln1_5Gb == '22') { // back code remains
                alert("Back")
              } else if (dataPln1_5Gb == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (weeklyPlan == "6") {
              const price = 800
              const dataPln1Gb = prompt(
                "1GB Weekly @\u20A6800 (7days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (dataPln1Gb == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 1GB @\u20A6800 for 7days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPln1Gb == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 1GB @\u20A6800 for 7days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPln1Gb == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPln1Gb == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 1GB @\u20A6800 for 7days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (dataPln1Gb == '22') { // back code remains
                alert("Back")
              } else if (dataPln1Gb == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (weeklyPlan == "7") {
              const price = 500
              const dataPln500MB = prompt(
                "500MB @\u20A6500 (7days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (dataPln500MB == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 500MB @\u20A6500 for 7days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPln500MB == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 500MB @\u20A6500 for 7days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPln500MB == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPln500MB == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 500MB @\u20A6500 for 7days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (dataPln500MB == '22') { // back code remains
                alert("Back")
              } else if (dataPln500MB == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (weeklyPlan == "22") {
              alert("Back")
            } else if (weeklyPlan == "0") {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (bingePlans == "22") {
            alert("Back")
          } else if (bingePlans == "0") {
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
      } else if (plans == '3') {
        const weeklyPlan = prompt(
        "Weekly Plan \n" +
        "1 \u20A65000/18GB \n" +
        "2 \u20A63000/10GB \n" +
        "3 \u20A62500/6GB \n" +
        "4 \u20A61500/5GB \n" +
        "5 \u20A61000/1.5GB \n" +
        "6 \u20A6800/1GB \n" +
        "7 \u20A6500/500MB \n" +
        "8 Monthly Plans \n" +
        "9 \u20A65000/18GB \n" +
        "22 Back\n" +
        "0 Menu"  
        )
        if (weeklyPlan == "1") {
              const price = 5000
              const dataPlan18Gb = prompt(
                "18GB @\u20A65000 + 2GB YT Night + 200MB YT,IG &Tiktok (7days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (dataPlan18Gb == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 18GB @\u20A65000 for 7days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan18Gb == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 18GB @\u20A65000 for 7days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan18Gb == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPlan18Gb == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 18GB @\u20A65000 for 7days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (dataPlan18Gb == '22') { // back code remains
                alert("Back")
              } else if (dataPlan18Gb == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
        } else if (weeklyPlan == "2") {
              const price = 3000
              const dataPlan10Gb = prompt(
                "10GB @\u20A63000 + 2GB YT Night + 200MB YT,IG &Tiktok (7days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (dataPlan10Gb == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 10GB @\u20A63000 for 7days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan10Gb == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 10GB @\u20A63000 for 7days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan10Gb == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPlan10Gb == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 10GB @\u20A63000 for 7days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (dataPlan10Gb == '22') { // back code remains
                alert("Back")
              } else if (dataPlan10Gb == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
        } else if (weeklyPlan == "3") {
              const price = 2500
              const dataPlan2Gb = prompt(
                "6GB @\u20A62500 + 2GB YT Night + 200MB YT,IG &Tiktok (2days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (dataPlan2Gb == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 6GB @\u20A62500 for 7days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan2Gb == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 6GB @\u20A62500 for 7days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan2Gb == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPlan2Gb == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 6GB @\u20A62500 for 7days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (dataPlan2Gb == '22') { // back code remains
                alert("Back")
              } else if (dataPlan2Gb == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
        } else if (weeklyPlan == "4") {
              const price = 1500
              const dataPlan5Gb = prompt(
                "5GB @\u20A61500 + 2GB YT Night + 200MB YT,IG &Tiktok (7days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (dataPlan5Gb == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 5GB @\u20A61500 for 7days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan5Gb == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 5GB @\u20A61500 for 7days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan5Gb == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPlan5Gb == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 5GB @\u20A61500 for 7days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (dataPlan5Gb == '22') { // back code remains
                alert("Back")
              } else if (dataPlan5Gb == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
        } else if (weeklyPlan == "5") {
              const price = 1000
              const dataPln1_5Gb = prompt(
                "1.5GB @\u20A61000 + 2GB YT Night + 200MB YT,IG &Tiktok (7days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (dataPln1_5Gb == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 1.5GB @\u20A61000 for 7days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPln1_5Gb == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 1.5GB @\u20A61000 for 7days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPln1_5Gb == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPln1_5Gb == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 1.5GB @\u20A61000 for 7days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (dataPln1_5Gb == '22') { // back code remains
                alert("Back")
              } else if (dataPln1_5Gb == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
        } else if (weeklyPlan == "6") {
              const price = 800
              const dataPln1Gb = prompt(
                "1GB Weekly @\u20A6800 (7days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (dataPln1Gb == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 1GB @\u20A6800 for 7days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPln1Gb == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 1GB @\u20A6800 for 7days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPln1Gb == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPln1Gb == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 1GB @\u20A6800 for 7days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (dataPln1Gb == '22') { // back code remains
                alert("Back")
              } else if (dataPln1Gb == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
        } else if (weeklyPlan == "7") {
              const price = 500
              const dataPln500MB = prompt(
                "500MB @\u20A6500 (7days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (dataPln500MB == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 500MB @\u20A6500 for 7days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPln500MB == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 500MB @\u20A6500 for 7days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPln500MB == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPln500MB == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 500MB @\u20A6500 for 7days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (dataPln500MB == '22') { // back code remains
                alert("Back")
              } else if (dataPln500MB == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
        } else if (weeklyPlan == "8") {
          const monthlyPlan = prompt(
            "Monthly Plan \n" +
            "1 \u20A61500/2GB \n" +
            "2 \u20A61500/3GB \n" +
            "3 \u20A62500/4GB \n" +
            "4 \u20A63000/8GB \n" +
            "5 \u20A64000/10GB \n" +
            "6 \u20A65000/13GB \n" +
            "7 \u20A66000/18GB \n" +
            "8 \u20A68000/25GB \n" +
            "22 Back \n" +
            "0 Menu" 
          ) 
          if (monthlyPlan == "1") {
            const price = 1500
            const dataPlan2Gb = prompt(
              "2GB @\u20A61500 + 2GB YT Night + 200MB YT,IG &Tiktok (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan2Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 2GB @\u20A61500 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan2Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 2GB @\u20A61500 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan2Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (dataPlan2Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 2GB @\u20A61500 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan2Gb == '22') { // back code remains
              alert("Back")
            } else if (dataPlan2Gb == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (monthlyPlan == "2") {
            const price = 2000
            const dataPlan3Gb = prompt(
              "3GB @\u20A62000 + 2GB YT Night + 200MB YT,IG &Tiktok (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan3Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 3GB @\u20A62000 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan3Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 3GB @\u20A62000 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan3Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (dataPlan3Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 3GB @\u20A62000 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan3Gb == '22') { // back code remains
              alert("Back")
            } else if (dataPlan3Gb == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (monthlyPlan == "3") {
            const price = 2500
            const dataPlan4Gb = prompt(
              "4GB @\u20A62500 + 2GB YT Night + 200MB YT,IG &Tiktok (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan4Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 4GB @\u20A62500 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan4Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 4GB @\u20A62500 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan4Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (dataPlan4Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 4GB @\u20A62500 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan4Gb == '22') { // back code remains
              alert("Back")
            } else if (dataPlan4Gb == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (monthlyPlan == "4") {
            const price = 3000
            const dataPlan8Gb = prompt(
              "8GB @\u20A63000 + 2GB YT Night + 200MB YT,IG &Tiktok (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan8Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 8GB @\u20A63000 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan8Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 8GB @\u20A63000 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan8Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (dataPlan8Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 8GB @\u20A63000 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan8Gb == '22') { // back code remains
              alert("Back")
            } else if (dataPlan8Gb == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (monthlyPlan == "5") {
            const price = 4000
            const dataPlan10Gb = prompt(
              "10GB @\u20A64000 + 2GB YT Night + 200MB YT,IG &Tiktok (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan10Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 10GB @\u20A64000 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan10Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 10GB @\u20A64000 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan10Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (dataPlan10Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 10GB @\u20A64000 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan10Gb == '22') { // back code remains
              alert("Back")
            } else if (dataPlan10Gb == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (monthlyPlan == "6") {
            const price = 5000
            const dataPlan13Gb = prompt(
              "13GB @\u20A65000 + 2GB YT Night + 200MB YT,IG &Tiktok (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan13Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 13GB @\u20A65000 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan13Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 13GB @\u20A65000 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan13Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (dataPlan13Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 13GB @\u20A65000 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan13Gb == '22') { // back code remains
              alert("Back")
            } else if (dataPlan13Gb == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (monthlyPlan == "7") {
            const price = 6000
            const dataPlan18Gb = prompt(
              "18GB @\u20A66000 + 2GB YT Night + 200MB YT,IG &Tiktok (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan18Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 18GB @\u20A66000 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan18Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 18GB @\u20A66000 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan18Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (dataPlan18Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 18GB @\u20A66000 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan18Gb == '22') { // back code remains
              alert("Back")
            } else if (dataPlan18Gb == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (monthlyPlan == "8") {
            const price = 8000
            const dataPlan3Gb = prompt(
              "25GB @\u20A68000 + 2GB YT Night + 200MB YT,IG &Tiktok (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan3Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 25GB @\u20A68000 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan3Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 25GB @\u20A68000 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan3Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (dataPlan3Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 25GB @\u20A68000 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan3Gb == '22') { // back code remains
              alert("Back")
            } else if (dataPlan3Gb == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (monthlyPlan == "22") {
            alert("Back")
          } else if (monthlyPlan == "0") {
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
        } else if (weeklyPlan == "9") {
              const price = 5000
              const dataPlan18Gb = prompt(
                "18GB @\u20A65000 + 2GB YT Night + 200MB YT,IG &Tiktok (7days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (dataPlan18Gb == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 18GB @\u20A65000 for 7days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan18Gb == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 18GB @\u20A65000 for 7days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
              } else if (dataPlan18Gb == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPlan18Gb == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 18GB @\u20A65000 for 7days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (dataPlan18Gb == '22') { // back code remains
                alert("Back")
              } else if (dataPlan18Gb == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
        } else if (weeklyPlan == "22") {
            alert("Back")
        } else if (weeklyPlan == "0") {
            alert("Menu")
        } else {
            alert("Connection Problem or Invalid MMI Code")
        }
      } else if (plans == '4') {
        const monthlyPlan = prompt(
            "Monthly Plan \n" +
            "1 \u20A61500/2GB \n" +
            "2 \u20A61500/3GB \n" +
            "3 \u20A62500/4GB \n" +
            "4 \u20A63000/8GB \n" +
            "5 \u20A64000/10GB \n" +
            "6 \u20A65000/13GB \n" +
            "7 \u20A66000/18GB \n" +
            "8 \u20A68000/25GB \n" +
            "22 Back \n" +
            "0 Menu" 
          )
          if (monthlyPlan == "1") {
            const price = 1500
            const dataPlan2Gb = prompt(
              "2GB @\u20A61500 + 2GB YT Night + 200MB YT,IG &Tiktok (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan2Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 2GB @\u20A61500 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan2Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 2GB @\u20A61500 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan2Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (dataPlan2Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 2GB @\u20A61500 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan2Gb == '22') { // back code remains
              alert("Back")
            } else if (dataPlan2Gb == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (monthlyPlan == "2") {
            const price = 2000
            const dataPlan3Gb = prompt(
              "3GB @\u20A62000 + 2GB YT Night + 200MB YT,IG &Tiktok (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan3Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 3GB @\u20A62000 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan3Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 3GB @\u20A62000 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan3Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (dataPlan3Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 3GB @\u20A62000 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan3Gb == '22') { // back code remains
              alert("Back")
            } else if (dataPlan3Gb == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (monthlyPlan == "3") {
            const price = 2500
            const dataPlan4Gb = prompt(
              "4GB @\u20A62500 + 2GB YT Night + 200MB YT,IG &Tiktok (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan4Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 4GB @\u20A62500 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan4Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 4GB @\u20A62500 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan4Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (dataPlan4Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 4GB @\u20A62500 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan4Gb == '22') { // back code remains
              alert("Back")
            } else if (dataPlan4Gb == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (monthlyPlan == "4") {
            const price = 3000
            const dataPlan8Gb = prompt(
              "8GB @\u20A63000 + 2GB YT Night + 200MB YT,IG &Tiktok (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan8Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 8GB @\u20A63000 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan8Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 8GB @\u20A63000 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan8Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (dataPlan8Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 8GB @\u20A63000 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan8Gb == '22') { // back code remains
              alert("Back")
            } else if (dataPlan8Gb == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (monthlyPlan == "5") {
            const price = 4000
            const dataPlan10Gb = prompt(
              "10GB @\u20A64000 + 2GB YT Night + 200MB YT,IG &Tiktok (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan10Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 10GB @\u20A64000 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan10Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 10GB @\u20A64000 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan10Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (dataPlan10Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 10GB @\u20A64000 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan10Gb == '22') { // back code remains
              alert("Back")
            } else if (dataPlan10Gb == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (monthlyPlan == "6") {
            const price = 5000
            const dataPlan13Gb = prompt(
              "13GB @\u20A65000 + 2GB YT Night + 200MB YT,IG &Tiktok (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan13Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 13GB @\u20A65000 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan13Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 13GB @\u20A65000 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan13Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (dataPlan13Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 13GB @\u20A65000 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan13Gb == '22') { // back code remains
              alert("Back")
            } else if (dataPlan13Gb == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (monthlyPlan == "7") {
            const price = 6000
            const dataPlan18Gb = prompt(
              "18GB @\u20A66000 + 2GB YT Night + 200MB YT,IG &Tiktok (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan18Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 18GB @\u20A66000 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan18Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 18GB @\u20A66000 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan18Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (dataPlan18Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 18GB @\u20A66000 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan18Gb == '22') { // back code remains
              alert("Back")
            } else if (dataPlan18Gb == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (monthlyPlan == "8") {
            const price = 8000
            const dataPlan3Gb = prompt(
              "25GB @\u20A68000 + 2GB YT Night + 200MB YT,IG &Tiktok (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan3Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 25GB @\u20A68000 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan3Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 25GB @\u20A68000 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan3Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (dataPlan3Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 25GB @\u20A68000 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan3Gb == '22') { // back code remains
              alert("Back")
            } else if (dataPlan3Gb == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (monthlyPlan == "22") {
            alert("Back")
          } else if (monthlyPlan == "0") {
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
      } else if (plans == '5') {
        const bigMonthly = prompt(
          "Big Monthly Plans \n" +
          "1 \u20A610000/35GB \n" +
          "2 \u20A615000/60GB \n" +
          "3 \u20A620000/100GB \n" +
          "4 \u20A630000/160GB \n" +
          "5 \u20A640000/210GB \n" +
          "22 Back \n" +
          "0 Menu" 
        )
        if (bigMonthly == "1") {
          const price = 10000
          const dataPlan35Gb = prompt(
              "35GB @\u20A610000 + 2GB YT Night + 200MB YT,IG &Tiktok (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others" 
          )
          if (dataPlan35Gb == 1) {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 35GB @\u20A610000 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
          } else if (dataPlan35Gb == 2) {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 35GB @\u20A610000 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
          } else if (dataPlan35Gb == 3) {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
          } else if (dataPlan35Gb == 4) {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 35GB @\u20A610000 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
          } else {
              alert("Connection Problem or Invalid MMI Code")
          }
        } else if (bigMonthly == "2") {
          const price = 15000
          const dataPlan60Gb = prompt(
              "60GB @\u20A615000 + 2GB YT Night + 200MB YT,IG &Tiktok (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others" 
          )
          if (dataPlan60Gb == 1) {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 50GB @\u20A615000 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
          } else if (dataPlan60Gb == 2) {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 60GB @\u20A615000 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
          } else if (dataPlan60Gb == 3) {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
          } else if (dataPlan60Gb == 4) {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 60GB @\u20A615000 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
          } else {
              alert("Connection Problem or Invalid MMI Code")
          }
        } else if (bigMonthly == "3") {
          const price = 20000
          const dataPlan100Gb = prompt(
              "100GB @\u20A620000 + 2GB YT Night + 200MB YT,IG &Tiktok (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others" 
          )
          if (dataPlan100Gb == 1) {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 100GB @\u20A620000 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
          } else if (dataPlan100Gb == 2) {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 100GB @\u20A620000 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
          } else if (dataPlan100Gb == 3) {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
          } else if (dataPlan100Gb == 4) {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 100GB @\u20A620000 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
          } else {
              alert("Connection Problem or Invalid MMI Code")
          }
        } else if (bigMonthly == "4") {
          const price = 30000
          const dataPlan35Gb = prompt(
              "160GB @\u20A630000 + 2GB YT Night + 200MB YT,IG &Tiktok (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others" 
          )
          if (dataPlan35Gb == 1) {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 160GB @\u20A630000 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
          } else if (dataPlan35Gb == 2) {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 160GB @\u20A630000 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
          } else if (dataPlan35Gb == 3) {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
          } else if (dataPlan35Gb == 4) {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 160GB @\u20A630000 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
          } else {
              alert("Connection Problem or Invalid MMI Code")
          }
        } else if (bigMonthly == "5") {
          const price = 40000
          const dataPlan35Gb = prompt(
              "210GB @\u20A640000 + 2GB YT Night + 200MB YT,IG &Tiktok (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others" 
          )
          if (dataPlan35Gb == 1) {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 210GB @\u20A640000 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
          } else if (dataPlan35Gb == 2) {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 210GB @\u20A640000 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
          } else if (dataPlan35Gb == 3) {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
          } else if (dataPlan35Gb == 4) {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 210GB @\u20A640000 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
          } else {
              alert("Connection Problem or Invalid MMI Code")
          }
        } else if (bigMonthly == "22") {
          alert("Back")
        } else if (bigMonthly == "0") {
          alert("Menu")
        } else {
          alert("Connection Problem or Invalid MMI Code")
        }
      } else if (plans == '6') {
        const months3 = prompt(
          "3Months+ Plans \n" +
          "1 \u20A650k/300GB/90days \n" +
          "2 \u20A660k/350GB/120days \n" +
          "3 \u20A6100k/685GB/365days \n" +
          "22 Back \n" +
          "0 Menu" 
        )
        if (months3 == "1") {
          const price = 50000
          const dataPlan300Gb = prompt(
              "300GB Monthly @\u20A650000 (90days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
          )
          if (dataPlan300Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 300GB @\u20A650000 for 90days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
          } else if (dataPlan300Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 300GB @\u20A650000 for 90days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
          } else if (dataPlan300Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
          } else if (dataPlan300Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 300GB @\u20A650000 for 90days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
          } else if (dataPlan300Gb == '22') { // back code remains
              alert("Back")
          } else if (dataPlan300Gb == '0') { // Menu code remains
              alert("Menu")
          } else {
              alert("Connection Problem or Invalid MMI Code")
          }
        } else if (months3 == "2") {
          const price = 60000
          const dataPlan350Gb = prompt(
              "350GB Monthly @\u20A660000 (120days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
          )
          if (dataPlan350Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 350GB @\u20A660000 for 120days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
          } else if (dataPlan350Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 350GB @\u20A660000 for 120days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
          } else if (dataPlan350Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
          } else if (dataPlan350Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 350GB @\u20A660000 for 120days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
          } else if (dataPlan350Gb == '22') { // back code remains
              alert("Back")
          } else if (dataPlan350Gb == '0') { // Menu code remains
              alert("Menu")
          } else {
              alert("Connection Problem or Invalid MMI Code")
          }
        } else if (months3 == "3") {
          const price = 100000
          const dataPlan685Gb = prompt(
              "685GB Monthly @\u20A6100000 (90days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
          )
          if (dataPlan685Gb == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 685GB @\u20A6100000 for 120days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
          } else if (dataPlan685Gb == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 685GB @\u20A6100000 for 365days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
          } else if (dataPlan685Gb == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
          } else if (dataPlan685Gb == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 685GB @\u20A6100000 for 365days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
          } else if (dataPlan685Gb == '22') { // back code remains
              alert("Back")
          } else if (dataPlan685Gb == '0') { // Menu code remains
              alert("Menu")
          } else {
              alert("Connection Problem or Invalid MMI Code")
          }
        } else if (months3 == "22") {
          alert("Back")
        } else if (months3 == "0") {
          alert("Menu")
        } else{
          alert("Connection Problem or Invalid MMI Code")
        }
      } else if (plans == '7') {
        const socialPlans = prompt(
          "1 \u20A6100/200MB \n" +
          "2 \u20A6300/1GB \n" +
          "3 \u20A6500/1.5GB \n" +
          "4 \u20A62000/8GB(EbonyLife) \n" +
          "5 \u20A610000/60GB(EbonyLife) \n" +
          "22 Back \n" +
          "0 Menu" 
        )
        if (socialPlans == "1") {
          const social200MB = prompt(
            "200MB Social @\u20A6100 (2days). Select how to pay: \n" +
            "1 With Airtime - \u20A6100 \n" +
            "2 With Smartcash - \u20A690 \n" +
            "22 Back \n" +
            "0 Menu" 
          )
          if (social200MB == "1") {
            const price = 100
            const dataPlan200MB = prompt(
              "200MB Social @\u20A6100 (2days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan200MB == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 200MB Social plan @\u20A6100 for 2days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan200MB == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 200MB Social plan @\u20A6100 for 2days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan200MB == '3') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 200MB Social @\u20A6100 for 2days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan200MB == '22') {
              alert("Back")
            } else if (dataPlan200MB == '0') {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (social200MB == "2") {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you.")
          } else if (social200MB == "22") {
            alert("back")
          } else if (social200MB == "0") {
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
        } else if (socialPlans == "2") {
          const social1GB = prompt(
            "1GB Social @\u20A6300 (3days). Select how to pay: \n" +
            "1 With Airtime - \u20A6100 \n" +
            "2 With Smartcash - \u20A690 \n" +
            "22 Back \n" +
            "0 Menu" 
          )
          if (social1GB == "1") {
            const price = 300
            const dataPlan1GB = prompt(
              "1GB Social @\u20A6300 (3days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan1GB == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 1GB Social plan @\u20A6300 for 3days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan1GB == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 1GB Social plan @\u20A6300 for 3days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan1GB == '3') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 1GB Social @\u20A6300 for 3days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan1GB == '22') {
              alert("Back")
            } else if (dataPlan1GB == '0') {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (social1GB == "2") {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you.")
          } else if (social1GB == "22") {
            alert("back")
          } else if (social1GB == "0") {
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
        } else if (socialPlans == "3") {
          const social1_5GB = prompt(
            "1.5GB Social @\u20A6300 (3days). Select how to pay: \n" +
            "1 With Airtime - \u20A6500 \n" +
            "2 With Smartcash - \u20A6450 \n" +
            "22 Back \n" +
            "0 Menu" 
          )
          if (social1_5GB == "1") {
            const price = 500
            const dataPlan1_5GB = prompt(
              "1.5GB Social @\u20A6500 (3days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan1_5GB == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 1.5GB Social plan @\u20A6500 for 3days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan1_5GB == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 1.5GB Social plan @\u20A6500 for 3days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan1_5GB == '3') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 1.5GB Social @\u20A6500 for 3days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan1_5GB == '22') {
              alert("Back")
            } else if (dataPlan1_5GB == '0') {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (social1_5GB == "2") {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you.")
          } else if (social1_5GB == "22") {
            alert("back")
          } else if (social1_5GB == "0") {
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
        } else if (socialPlans == "4") {
          const social8GB = prompt(
            "8GB Social @\u20A62000 valid for 30days.\n" +
            "This plan can only be used for EbonylifeOnPlus. \n" +
            "1 With Airtime - \u20A62000 \n" +
            "2 With Smartcash - \u20A61800 \n" +
            "22 Back \n" +
            "0 Menu" 
          )
          if (social8GB == "1") {
            const price = 2000
            const dataPlan8GB = prompt(
              "8GB Social @\u20A62000 (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan8GB == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 8GB Social plan @\u20A62000 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan8GB == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 8GB Social plan @\u20A62000 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan8GB == '3') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 8GB Social @\u20A62000 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan8GB == '22') {
              alert("Back")
            } else if (dataPlan8GB == '0') {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (social8GB == "2") {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you.")
          } else if (social8GB == "22") {
            alert("back")
          } else if (social8GB == "0") {
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
        } else if (socialPlans == "5") {
          const social60GB = prompt(
            "60GB Social @\u20A610000 valid for 365days.\n" +
            "This plan can only be used for EbonylifeOnPlus. \n" +
            "1 With Airtime - \u20A610000 \n" +
            "2 With Smartcash - \u20A69800 \n" +
            "22 Back \n" +
            "0 Menu" 
          )
          if (social60GB == "1") {
            const price = 10000
            const dataPlan60GB = prompt(
              "60GB Social @\u20A610000 (365days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan60GB == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 60GB Social plan @\u20A610000 for 365days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan60GB == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 60GB Social plan @\u20A610000 for 365days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan60GB == '3') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 60GB Social @\u20A610000 for 365days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan60GB == '22') {
              alert("Back")
            } else if (dataPlan60GB == '0') {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (social60GB == "2") {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you.")
          } else if (social60GB == "22") {
            alert("back")
          } else if (social60GB == "0") {
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
        } else if (socialPlans == "22") {
          alert("Back")
        } else if (socialPlans == "0") {
          alert("Menu")
        } else {
          alert("Connection Problem or Invalid MMI Code")
        }
      } else if (plans == '8') {
        const everydayPlan = prompt(
          "1 \u20A64000/15GB \n" +
          "2 \u20A67500/40GB \n" +
          "22 Back \n" +
          "0 Menu"
        )
        if (everydayPlan == "1") {
          const price = 5000
          const dataPlan15Gb = prompt(
                "50MB Daily @\u20A64000 (30days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
          )
          if (dataPlan15Gb == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 500MB Daily @\u20A64000 for 30days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
          } else if (dataPlan15Gb == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 500MB Daily @\u20A64000 for 30days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
          } else if (dataPlan15Gb == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
          } else if (dataPlan15Gb == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 500MB Daily @\u20A64000 for 30days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
          } else if (dataPlan15Gb == '22') { // back code remains
                alert("Back")
          } else if (dataPlan15Gb == '0') { // Menu code remains
                alert("Menu")
          } else {
                alert("Connection Problem or Invalid MMI Code")
          }
        } else if (everydayPlan == "2") {
          const price = 7500
          const dataPlan40Gb = prompt(
                "51.3GB Daily @\u20A67500 (30days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
          )
          if (dataPlan40Gb == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 1.3GB Daily @\u20A67500 for 30days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
          } else if (dataPlan40Gb == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 1.3GB Daily @\u20A67500 for 30days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
          } else if (dataPlan40Gb == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
          } else if (dataPlan40Gb == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 1.3GB Daily @\u20A67500 for 30days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
          } else if (dataPlan40Gb == '22') { // back code remains
                alert("Back")
          } else if (dataPlan40Gb == '0') { // Menu code remains
                alert("Menu")
          } else {
                alert("Connection Problem or Invalid MMI Code")
          }
        } else if (everydayPlan == "22") {
          alert("Back")
        } else if (everydayPlan == "0") {
          alert("Menu")
        } else {
          alert("Connection Problem or Invalid MMI Code")
        }
      } else if (plans == '22') {
        alert("Back")
      } else if (plans == '0') {
        alert("Menu")
      } else {
        alert("Invalid input or MMI incomplete")
      }
    } else if (dataPlans == 4) { // Back and Menu Code Remains
      const price = 3000
      const dataPlan10Gb = prompt(
        "10GB @\u20A63000 + 2GB YT Night + 200MB YT,IG &Tiktok (7days) \n" +
        "1 Buy & Auto Renew \n" +
        "2 Buy Once \n" +
        "3 Use SmartCash (10% cashback) \n" +
        "4 Buy for Others \n" +
        "22 Back \n" +
        "0 Menu"
      )
      if (dataPlan10Gb == '1') {
        if (balance >= price) { 
          alert("Dear Customer, your purchase of 10GB for \u20A63000 for 7days was successful. Your data plan will automatically renew upon expiration")
        } else {
          alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
        }
      } else if (dataPlan10Gb == '2') {
        if (balance >= price) { 
          alert("Dear Customer, your purchase of 10GB for \u20A63000 for 7days was successful. Your data plan will not automatically renew upon expiration")
        } else {
          alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
        }
      } else if (dataPlan10Gb == '3') {
        alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
      } else if (dataPlan10Gb == '4') {
        const buyForFrnd = prompt (
          "Enter the Recipient MSISDN \n" +
          "22 Back \n" +
          "0 Menu"
        )
        if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
          const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
          )
          if (transfer.length == 4 && !isNaN(transfer)) {
            if (balance >= price) {
              alert(`Transfer of 10GB for \u20A63000 for 7days to ${buyForFrnd} was successful`)
            } else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          }  else {
            alert("Invalid Pin")
          }
        } else if (buyForFrnd == '22') {
        alert("Back")
        } else if (buyForFrnd == '0') {
        alert("Menu")
        }
        else {
          alert(`Invalid MSISDN`)
        }
      } else if (dataPlan10Gb == '22') { // back code remains
        alert("Back")
      } else if (dataPlan10Gb == '0') { // Menu code remains
        alert("Menu")
      } else {
        alert("Connection Problem or Invalid MMI Code")
      }
    } else if (dataPlans == 5) { // Back and Menu Code Remains
        const price = 1500
        const dataPlan5Gb = prompt(
        "5GB @\u20A61500+2GB YT Night+200MB YT,IG &Tiktok (7days) \n" +
        "1 Buy & Auto Renew \n" +
        "2 Buy Once \n" +
        "3 Use SmartCash (10% cashback) \n" +
        "4 Buy for Others \n" +
        "22 Back \n" +
        "0 Menu"
      )
      if (dataPlan5Gb == '1') {
        if (balance >= price) {
          alert("Dear Customer, your purchase of 5GB for \u20A61500 for 7days was successful. Your data plan will automatically renew upon expiration")
        }else {
          alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
      } else if (dataPlan5Gb == '2') {
        if (balance >= price) {
          alert("Dear Customer, your purchase of 5GB for \u20A61500 for 7days was successful. Your data plan will not automatically renew upon expiration")
        }else {
          alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
      } else if (dataPlan5Gb == '3') {
        alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
      } else if (dataPlan5Gb == '4') {
        const buyForFrnd = prompt (
          "Enter the Recipient MSISDN \n" +
          "22 Back \n" +
          "0 Menu"
        )
        if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
          const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
          )
          if (transfer.length == 4 && !isNaN(transfer)) {
            if (balance >= price) {
              alert(`Transfer of 5GB for \u20A61500 for 7days to ${buyForFrnd} was successful`)
            }else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          }  else {
            alert("Invalid Pin")
          }
        } else if (buyForFrnd == '22') {
        alert("Back")
        } else if (buyForFrnd == '0') {
        alert("Menu")
        }
        else {
          alert(`Invalid MSISDN`)
        }
      } else if (dataPlan5Gb == '22') { // back code remains
        alert("Back")
      } else if (dataPlan5Gb == '0') { // Menu code remains
        alert("Menu")
      } else {
        alert("Connection Problem or Invalid MMI Code")
      }
    } else if (dataPlans == 6) { // Back and Menu Code remains
        const price = 750
        const dataPlan3Gb = prompt( 
        "3GB @\u20A6750 + 1GB YT Night + 200MB YT,IG &Tiktok (2days) \n" +
        "1 Buy & Auto Renew \n" +
        "2 Buy Once \n" +
        "3 Use SmartCash (10% cashback) \n" +
        "4 Buy for Others \n" +
        "22 Back \n" +
        "0 Menu"
      )
      if (dataPlan3Gb == '1') {
        if (balance >= price) {
          alert("Dear Customer, your purchase of 3GB for \u20A6750 for 7days was successful. Your data plan will automatically renew upon expiration")
        }else {
          alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
      } else if (dataPlan3Gb == '2') {
        if (balance >= price) {
          alert("Dear Customer, your purchase of 3GB for \u20A6750 for 7days was successful. Your data plan not will automatically renew upon expiration")
        }else {
          alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
      } else if (dataPlan3Gb == '3') {
        alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
      } else if (dataPlan3Gb == '4') {
        const buyForFrnd = prompt (
          "Enter the Recipient MSISDN \n" +
          "22 Back \n" +
          "0 Menu"
        )
        if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
          const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
          )
          if (transfer.length == 4 && !isNaN(transfer)) {
            if (balance >= price) {
              alert(`Transfer of 3GB for \u20A6750 for 7days to ${buyForFrnd} was successful`)
            } else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          }  else {
            alert("Invalid Pin")
          }
        } else if (buyForFrnd == '22') {
        alert("Back")
        } else if (buyForFrnd == '0') {
        alert("Menu")
        }
        else {
          alert(`Invalid MSISDN`)
        }
      } else if (dataPlan3Gb == '22') { // back code remains
        alert("Back")
      } else if (dataPlan3Gb == '0') { // Menu code remains
        alert("Menu")
      } else {
        alert("Connection Problem or Invalid MMI Code")
      }
    } else if (dataPlans == 7) { // Back and Menu Code remains
        const price = 500
        const dataPlan1_5Gb = prompt( 
        "1.5GB @\u20A6500 valid for 1day (24hrs) \n" +
        "Select how to buy \n" +
        "1 Buy Now \n" +
        "22 Back \n" +
        "0 Menu"
      )
      if(dataPlan1_5Gb == '1') {
        const buyNow = prompt( 
        "1 Buy & Auto Renew \n" +
        "2 Buy Once \n" +
        "3 Use SmartCash (10% cashback) \n" +
        "4 Buy for Others \n" +
        "22 Back \n" +
        "0 Menu"
      )
      if (buyNow == '1') {
        if (balance >= price) {
          alert("Dear Customer, your purchase of 1.5GB for \u20A6500 for 1day was successful. Your data plan will automatically renew upon expiration")
        } else {
          alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
      } else if (buyNow == '2') {
        if (balance >= price) {
          alert("Dear Customer, your purchase of 1.5GB for \u20A6500 for 1day was successful. Your data plan will not automatically renew upon expiration")
        } else {
          alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
      } else if (buyNow == '3') {
        alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
      } else if (buyNow == '4') {
        const buyForFrnd = prompt (
          "Enter the Recipient MSISDN \n" +
          "22 Back \n" +
          "0 Menu"
        )
        if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
          const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
          )
          if (transfer.length == 4 && !isNaN(transfer)) {
            if (balance >= price) { 
              alert(`Transfer of 1.5GB for \u20A6500 for 1day to ${buyForFrnd} was successful`)
            } else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          }  else {
            alert("Invalid Pin")
          }
        } else if (buyForFrnd == '22') {
        alert("Back")
        } else if (buyForFrnd == '0') {
        alert("Menu")
        }
        else {
          alert(`Invalid MSISDN`)
        }
      } else if (buyNow == '22') { // back code remains
        alert("Back")
      } else if (buyNow == '0') { // Menu code remains
        alert("Menu")
      } else {
        alert("Connection Problem or Invalid MMI Code")
      }
      } else if (dataPlan1_5Gb == '22') {
        alert("Back")
      } else if (dataPlan1_5Gb == '0') {
        alert("Menu")
      } else {
        alert("Connection Problem or Invalid MMI code")
      }
    } else if (dataPlans == 8) {
      // Back and Menu Code remains
        const price = 600
        const dataPlan2Gb = prompt( 
        "2GB @\u20A6600 + 1GB YT Night + 200MB YT,IG &Tiktok (2days) \n" +
        "1 Buy & Auto Renew \n" +
        "2 Buy Once \n" +
        "3 Use SmartCash (10% cashback) \n" +
        "4 Buy for Others \n" +
        "22 Back \n" +
        "0 Menu"
      )
      if (dataPlan2Gb == '1') {
        if (balance >= price) {
          alert("Dear Customer, your purchase of 2GB for \u20A6600 for 2days was successful. Your data plan will automatically renew upon expiration")
        } else {
          alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
      } else if (dataPlan2Gb == '2') {
        if (balance >= price) {
          alert("Dear Customer, your purchase of 2GB for \u20A6600 for 2days was successful. Your data plan will not automatically renew upon expiration")
        } else {
          alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
      } else if (dataPlan2Gb == '3') {
        alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
      } else if (dataPlan2Gb == '4') {
        const buyForFrnd = prompt (
          "Enter the Recipient MSISDN \n" +
          "22 Back \n" +
          "0 Menu"
        )
        if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
          const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
          )
          if (transfer.length == 4 && !isNaN(transfer)) {
            if (balance >= price) {
              alert(`Transfer of 2GB for \u20A6600 for 2days to ${buyForFrnd} was successful`)
            } else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          }  else {
            alert("Invalid Pin")
          }
        } else if (buyForFrnd == '22') {
        alert("Back")
        } else if (buyForFrnd == '0') {
        alert("Menu")
        }
        else {
          alert(`Invalid MSISDN`)
        }
      } else if (dataPlan2Gb == '22') { // back code remains
        alert("Back")
      } else if (dataPlan2Gb == '0') { // Menu code remains
        alert("Menu")
      } else {
        alert("Connection Problem or Invalid MMI Code")
      }
    } else if (dataPlans == 9) {
      // Back and Menu Code remains
        const price = 2500
        const dataPlan6Gb = prompt( 
        "6GB @\u20A62500 + 2GB YT Night + 200MB YT,IG &Tiktok (7days) \n" +
        "1 Buy & Auto Renew \n" +
        "2 Buy Once \n" +
        "3 Use SmartCash (10% cashback) \n" +
        "4 Buy for Others \n" +
        "22 Back \n" +
        "0 Menu"
      )
      if (dataPlan6Gb == '1') {
        if (balance >= price) {
          alert("Dear Customer, your purchase of 6GB for \u20A62500 for 7days was successful. Your data plan will automatically renew upon expiration")
        } else {
          alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
        }
      } else if (dataPlan6Gb == '2') {
        if (balance >= price) {
          alert("Dear Customer, your purchase of 6GB for \u20A62500 for 7days was successful. Your data plan will not automatically renew upon expiration")
        } else {
          alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
        }
      } else if (dataPlan6Gb == '3') {
        alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
      } else if (dataPlan6Gb == '4') {
        const buyForFrnd = prompt (
          "Enter the Recipient MSISDN \n" +
          "22 Back \n" +
          "0 Menu"
        )
        if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
          const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
          )
          if (transfer.length == 4 && !isNaN(transfer)) {
            if (balance >= price) {
              alert(`Transfer of 6GB for \u20A62500 for 7days to ${buyForFrnd} was successful`)
            } else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          }  else {
            alert("Invalid Pin")
          }
        } else if (buyForFrnd == '22') {
        alert("Back")
        } else if (buyForFrnd == '0') {
        alert("Menu")
        }
        else {
          alert(`Invalid MSISDN`)
        }
      } else if (dataPlan6Gb == '22') { // back code remains
        alert("Back")
      } else if (dataPlan6Gb == '0') { // Menu code remains
        alert("Menu")
      } else {
        alert("Connection Problem or Invalid MMI Code")
      }
    } else if (dataPlans == "*") {
      const nextPage = prompt(
        "10 Voice Plans \n" +
        "11 Mifi/Router Plans \n" +
        "12 Roaming Plans \n" +
        "13 Social Plans \n" +
        "14 Everyday Plans \n" +
        "15 Borrow Airtime/Data \n" +
        "16 Check Balance \n" +
        "0 Menu" 
      )
      if (nextPage === '10') {
        const voiceBundles = prompt(
          "Voice Bundles \n" +
          "1 Talkmore Bundle \n" +
          "2 Flexi Bundle \n" +
          "3 RPP Plan\n" +
          "4 Roaming Bundle \n" +
          "5 Check Bundle Balance \n" +
          "Reply" 
        )
        if (voiceBundles == 1) {
          const talkMore = prompt(
            "1 \u20A6100 for 10mins\n" +
            "2 \u20A6200 for 20mins\n" +
            "3 \u20A6300 for 30mins\n" +
            "4 \u20A6500 for 50mins\n" +
            "5 \u20A61000 for 100mins\n" +
            "6 \u20A61500 for 150mins\n" +
            "# Back\n" +
            "0 Main Menu\n" +
            "Reply" 
          )
          if (talkMore == "1") { // Back and Menu Code remains
            const price = 100
            const talkMore10Mins = prompt( 
            "10mins @\u20A6100 (3days) \n" +
            "1 Buy & Auto Renew \n" +
            "2 Buy Once \n" +
            "3 Use SmartCash (10% cashback) \n" +
            "4 Buy for Others \n" +
            "# Back \n" +
            "0 Menu"
          )
          if (talkMore10Mins == '1') {
            if (balance >= price) {
              alert("Dear Customer, your purchase of 10mins TalkMore bundle for \u20A6100 for 3days was successful. Your data plan will automatically renew upon expiration")
            } else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          } else if (talkMore10Mins == '2') {
            if (balance >= price) {
              alert("Dear Customer, your purchase of 10mins TalkMore bundle for \u20A6100 for 3days was successful. Your data plan will not automatically renew upon expiration")
            } else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          } else if (talkMore10Mins == '3') {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
          } else if (talkMore10Mins == '4') {
            const buyForFrnd = prompt (
              "Enter the Recipient MSISDN \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
              const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
              )
              if (transfer.length == 4 && !isNaN(transfer)) {
                if (balance >= price) {
                  alert(`Transfer of 10mins for \u20A6100 for 3days to ${buyForFrnd} was successful`)
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
              }  else {
                alert("Invalid Pin")
              }
            } else if (buyForFrnd == '22') {
            alert("Back")
            } else if (buyForFrnd == '0') {
            alert("Menu")
            }
            else {
              alert(`Invalid MSISDN`)
            }
          } else if (talkMore10Mins == '22') { // back code remains
            alert("Back")
          } else if (talkMore10Mins == '0') { // Menu code remains
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
          } else if (talkMore == "2") { // Back and Menu Code remains
            const price = 200
            const talkMore20Mins = prompt( 
            "20mins @\u20A6200 (7days) \n" +
            "1 Buy & Auto Renew \n" +
            "2 Buy Once \n" +
            "3 Use SmartCash (10% cashback) \n" +
            "4 Buy for Others \n" +
            "# Back \n" +
            "0 Menu"
          )
          if (talkMore20Mins == '1') {
            if (balance >= price) { 
              alert("Dear Customer, your purchase of 20mins TalkMore bundle for \u20A6200 for 7days was successful. Your data plan will automatically renew upon expiration")
            } else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          } else if (talkMore20Mins == '2') {
            if (balance >= price) {
              alert("Dear Customer, your purchase of 20mins TalkMore bundle for \u20A6200 for 7days was successful. Your data plan will not automatically renew upon expiration")
            } else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          } else if (talkMore20Mins == '3') {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
          } else if (talkMore20Mins == '4') {
            const buyForFrnd = prompt (
              "Enter the Recipient MSISDN \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
              const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
              )
              if (transfer.length == 4 && !isNaN(transfer)) {
                if (balance >= price) {
                  alert(`Transfer of 20mins for \u20A6200 for 7days to ${buyForFrnd} was successful`)
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                }
              }  else {
                alert("Invalid Pin")
              }
            } else if (buyForFrnd == '22') {
            alert("Back")
            } else if (buyForFrnd == '0') {
            alert("Menu")
            }
            else {
              alert(`Invalid MSISDN`)
            }
          } else if (talkMore20Mins == '22') { // back code remains
            alert("Back")
          } else if (talkMore20Mins == '0') { // Menu code remains
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
          } else if (talkMore == "3") {
            // Back and Menu Code remains
            const price = 300
            const talkMore30Mins = prompt( 
            "30mins @\u20A6300 (7days) \n" +
            "1 Buy & Auto Renew \n" +
            "2 Buy Once \n" +
            "3 Use SmartCash (10% cashback) \n" +
            "4 Buy for Others \n" +
            "# Back \n" +
            "0 Menu"
          )
          if (talkMore30Mins == '1') {
            if (balance >= price) {
              alert("Dear Customer, your purchase of 30mins TalkMore bundle for \u20A6300 for 7days was successful. Your data plan will automatically renew upon expiration")
            } else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          } else if (talkMore30Mins == '2') {
            if (balance >= price) {
              alert("Dear Customer, your purchase of 30mins TalkMore bundle for \u20A6300 for 7days was successful. Your data plan will not automatically renew upon expiration")
            } else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          } else if (talkMore30Mins == '3') {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
          } else if (talkMore30Mins == '4') {
            const buyForFrnd = prompt (
              "Enter the Recipient MSISDN \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
              const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
              )
              if (transfer.length == 4 && !isNaN(transfer)) {
                if (balance >= price) { 
                  alert(`Transfer of 30mins for \u20A6300 for 7days to ${buyForFrnd} was successful`)
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                }
              }  else {
                alert("Invalid Pin")
              }
            } else if (buyForFrnd == '22') {
            alert("Back")
            } else if (buyForFrnd == '0') {
            alert("Menu")
            }
            else {
              alert(`Invalid MSISDN`)
            }
          } else if (talkMore30Mins == '22') { // back code remains
            alert("Back")
          } else if (talkMore30Mins == '0') { // Menu code remains
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
          } else if (talkMore == "4") {
            // Back and Menu Code remains
            const price = 500
            const talkMore50Mins = prompt( 
            "50mins @\u20A6500 (14days) \n" +
            "1 Buy & Auto Renew \n" +
            "2 Buy Once \n" +
            "3 Use SmartCash (10% cashback) \n" +
            "4 Buy for Others \n" +
            "# Back \n" +
            "0 Menu"
          )
          if (talkMore50Mins == '1') {
            if (balance >= price) {
              alert("Dear Customer, your purchase of 50mins TalkMore bundle for \u20A6500 for 14days was successful. Your data plan will automatically renew upon expiration")
            } else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          } else if (talkMore50Mins == '2') {
            if (balance >= price) {
              alert("Dear Customer, your purchase of 50mins TalkMore bundle for \u20A6500 for 14days was successful. Your data plan will not automatically renew upon expiration")
            } else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          } else if (talkMore50Mins == '3') {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
          } else if (talkMore50Mins == '4') {
            const buyForFrnd = prompt (
              "Enter the Recipient MSISDN \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
              const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
              )
              if (transfer.length == 4 && !isNaN(transfer)) {
                if (balance >= price) { 
                  alert(`Transfer of 50mins for \u20A6300 for 14days to ${buyForFrnd} was successful`)
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                }
              }  else {
                alert("Invalid Pin")
              }
            } else if (buyForFrnd == '22') {
            alert("Back")
            } else if (buyForFrnd == '0') {
            alert("Menu")
            }
            else {
              alert(`Invalid MSISDN`)
            }
          } else if (talkMore50Mins == '22') { // back code remains
            alert("Back")
          } else if (talkMore50Mins == '0') { // Menu code remains
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
          } else if (talkMore == "5") {
            // Back and Menu Code remains
            const price = 1000
            const talkMore100Mins = prompt( 
            "100mins @\u20A61000 (7days) \n" +
            "1 Buy & Auto Renew \n" +
            "2 Buy Once \n" +
            "3 Use SmartCash (10% cashback) \n" +
            "4 Buy for Others \n" +
            "# Back \n" +
            "0 Menu"
          )
          if (talkMore100Mins == '1') {
            if (balance >= price) {
              alert("Dear Customer, your purchase of 100mins TalkMore bundle for \u20A61000 for 14days was successful. Your data plan will automatically renew upon expiration")
            } else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          } else if (talkMore100Mins == '2') {
            if (balance >= price) {
              alert("Dear Customer, your purchase of 100mins TalkMore bundle for \u20A61000 for 14days was successful. Your data plan will not automatically renew upon expiration")
            } else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          } else if (talkMore100Mins == '3') {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
          } else if (talkMore100Mins == '4') {
            const buyForFrnd = prompt (
              "Enter the Recipient MSISDN \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
              const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
              )
              if (transfer.length == 4 && !isNaN(transfer)) {
                if (balance >= price) {
                  alert(`Transfer of 100mins for \u20A61000 for 14days to ${buyForFrnd} was successful`)
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                }
              }  else {
                alert("Invalid Pin")
              }
            } else if (buyForFrnd == '22') {
            alert("Back")
            } else if (buyForFrnd == '0') {
            alert("Menu")
            }
            else {
              alert(`Invalid MSISDN`)
            }
          } else if (talkMore100Mins == '22') { // back code remains
            alert("Back")
          } else if (talkMore100Mins == '0') { // Menu code remains
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
          } else if (talkMore == "6") {
            // Back and Menu Code remains
            const price = 1500
            const talkMore150Mins = prompt( 
            "150mins @\u20A61500 (30days) \n" +
            "1 Buy & Auto Renew \n" +
            "2 Buy Once \n" +
            "3 Use SmartCash (10% cashback) \n" +
            "4 Buy for Others \n" +
            "# Back \n" +
            "0 Menu"
          )
          if (talkMore150Mins == '1') {
            if (balance >= price) {
              alert("Dear Customer, your purchase of 150mins TalkMore bundle for \u20A61500 for 30days was successful. Your data plan will automatically renew upon expiration")
            } else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          } else if (talkMore150Mins == '2') {
            if (balance >= price) {
              alert("Dear Customer, your purchase of 150mins TalkMore bundle for \u20A61500 for 30days was successful. Your data plan will not automatically renew upon expiration")
            } else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          } else if (talkMore150Mins == '3') {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
          } else if (talkMore150Mins == '4') {
            const buyForFrnd = prompt (
              "Enter the Recipient MSISDN \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
              const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
              )
              if (transfer.length == 4 && !isNaN(transfer)) {
                if (balance >= price) {
                  alert(`Transfer of 150mins for \u20A61500 for 30days to ${buyForFrnd} was successful`)
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
              }  else {
                alert("Invalid Pin")
              }
            } else if (buyForFrnd == '22') {
            alert("Back")
            } else if (buyForFrnd == '0') {
            alert("Menu")
            }
            else {
              alert(`Invalid MSISDN`)
            }
          } else if (talkMore150Mins == '22') { // back code remains
            alert("Back")
          } else if (talkMore150Mins == '0') { // Menu code remains
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
          } else if (talkMore == "#") {
            alert("Back")
          } else if (talkMore == "0") {
            alert("Main Menu")
          } else {
            alert("Connection problem or Invalid MMI code")
          }
        } else if(voiceBundles == 2) {
          const flexi = prompt(
            "1 10mins+400MB @ \u20A6500 \n" +
            "2 20mins+1.2GB @ \u20A61000 \n" +
            "3 40mins+2.5GB @ \u20A62000 \n" +
            "4 100mins+12GB @ \u20A65000 \n" +
            "# Back \n" + 
            "0 Back \n" +
            "Reply" 
          )
          if (flexi == "1") {
             // Back and Menu Code remains
            const price = 500
            const flexi10Mins = prompt( 
            "10mins+400MB+5sms @\u20A6500 (7days) \n" +
            "1 Buy & Auto Renew \n" +
            "2 Buy Once \n" +
            "3 Use SmartCash (10% cashback) \n" +
            "4 Buy for Others \n" +
            "# Back \n" +
            "0 Menu"
          )
          if (flexi10Mins == '1') {
            if (balance >= price) {
              alert("Dear Customer, your purchase of 10mins+400MB+5sms Flexi bundle @\u20A6500 for 7days was successful. Your data plan will automatically renew upon expiration")
            } else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          } else if (flexi10Mins == '2') {
            if (balance >= price) {
              alert("Dear Customer, your purchase of 10mins+400MB+5sms Flexi bundle @\u20A6500 for 7days was successful. Your data plan will not automatically renew upon expiration")
            } else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          } else if (flexi10Mins == '3') {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
          } else if (flexi10Mins == '4') {
            const buyForFrnd = prompt (
              "Enter the Recipient MSISDN \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
              const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
              )
              if (transfer.length == 4 && !isNaN(transfer)) {
                if (balance >= price) {
                  alert(`Transfer of 10mins+400MB+5SMS @\u20A6500 for 7days to ${buyForFrnd} was successful`)
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
              }  else {
                alert("Invalid Pin")
              }
            } else if (buyForFrnd == '22') {
            alert("Back")
            } else if (buyForFrnd == '0') {
            alert("Menu")
            }
            else {
              alert(`Invalid MSISDN`)
            }
          } else if (flexi10Mins == '22') { // back code remains
            alert("Back")
          } else if (flexi10Mins == '0') { // Menu code remains
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
          } else if(flexi == "2") {
            // Back and Menu Code remains
            const price = 1000
            const flexi20Mins = prompt( 
            "20mins+1.2GB+5sms @\u20A61000 (7days) \n" +
            "1 Buy & Auto Renew \n" +
            "2 Buy Once \n" +
            "3 Use SmartCash (10% cashback) \n" +
            "4 Buy for Others \n" +
            "# Back \n" +
            "0 Menu"
          )
          if (flexi20Mins == '1') {
            if (balance >= price) {
              alert("Dear Customer, your purchase of 20mins+1.2GB+5sms Flexi bundle @\u20A61000 for 7days was successful. Your data plan will automatically renew upon expiration")
            } else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          } else if (flexi20Mins == '2') {
            if (balance >= price) {
              alert("Dear Customer, your purchase of 20mins+1.2GB+5sms Flexi bundle @\u20A61000 for 7days was successful. Your data plan will not automatically renew upon expiration")
            } else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          } else if (flexi20Mins == '3') {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
          } else if (flexi20Mins == '4') {
            const buyForFrnd = prompt (
              "Enter the Recipient MSISDN \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
              const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
              )
              if (transfer.length == 4 && !isNaN(transfer)) {
                if (balance >= price) {
                  alert(`Transfer of 20mins+1.2GB+5SMS @\u20A61000 for 7days to ${buyForFrnd} was successful`)
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
              }  else {
                alert("Invalid Pin")
              }
            } else if (buyForFrnd == '22') {
            alert("Back")
            } else if (buyForFrnd == '0') {
            alert("Menu")
            }
            else {
              alert(`Invalid MSISDN`)
            }
          } else if (flexi20Mins == '22') { // back code remains
            alert("Back")
          } else if (flexi20Mins == '0') { // Menu code remains
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
          } else if (flexi == "3") {
             // Back and Menu Code remains
            const price = 2000
            const flexi40Mins = prompt( 
            "40mins+2.5GB+5sms @\u20A62000 (30days) \n" +
            "1 Buy & Auto Renew \n" +
            "2 Buy Once \n" +
            "3 Use SmartCash (10% cashback) \n" +
            "4 Buy for Others \n" +
            "# Back \n" +
            "0 Menu"
            )
            if (flexi40Mins == '1') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 40mins+2.5GB+5sms Flexi bundle @\u20A62000 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (flexi40Mins == '2') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 40mins+2.5GB+5sms Flexi bundle @\u20A62000 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (flexi40Mins == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (flexi40Mins == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 40mins+2.5GB+5SMS @\u20A62000 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (flexi40Mins == '22') { // back code remains
              alert("Back")
            } else if (flexi40Mins == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (flexi == "4") {
             // Back and Menu Code remains
            const price = 5000
            const flexi100Mins = prompt( 
            "100mins+12GB+5sms @\u20A65000 (30days) \n" +
            "1 Buy & Auto Renew \n" +
            "2 Buy Once \n" +
            "3 Use SmartCash (10% cashback) \n" +
            "4 Buy for Others \n" +
            "# Back \n" +
            "0 Menu"
            )
            if (flexi100Mins == '1') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 100mins+12GB+5sms Flexi bundle @\u20A65000 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (flexi100Mins == '2') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 100mins+12GB+5sms Flexi bundle @\u20A65000 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (flexi100Mins == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (flexi100Mins == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 100mins+ 12GB+5SMS @\u20A65000 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (flexi100Mins == '22') { // back code remains
              alert("Back")
            } else if (flexi100Mins == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (flexi == "#") {
            alert("Back")
          } else if (flexi == "0") {
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
        } else if (voiceBundles == 3) {
          const rpp = prompt(
            "RPP Plan is NOW FLEXI \n" +
            "1 10mins+400MB @ \u20A6500 \n" +
            "2 20mins+1.2GB @ \u20A61000 \n" +
            "3 40mins+2.5GB @ \u20A62000 \n" +
            "4 100mins+12GB @ \u20A65000 \n" +
            "# Back \n" + 
            "0 Back \n" +
            "Reply" 
          )
          if (rpp == "1") {
             // Back and Menu Code remains
            const price = 500
            const flexi10Mins = prompt( 
            "10mins+400MB+5sms @\u20A6500 (7days) \n" +
            "1 Buy & Auto Renew \n" +
            "2 Buy Once \n" +
            "3 Use SmartCash (10% cashback) \n" +
            "4 Buy for Others \n" +
            "# Back \n" +
            "0 Menu"
          )
          if (flexi10Mins == '1') {
            if (balance >= price) {
              alert("Dear Customer, your purchase of 10mins+400MB+5sms Flexi bundle @\u20A6500 for 7days was successful. Your data plan will automatically renew upon expiration")
            } else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          } else if (flexi10Mins == '2') {
            if (balance >= price) {
              alert("Dear Customer, your purchase of 10mins+400MB+5sms Flexi bundle @\u20A6500 for 7days was successful. Your data plan will not automatically renew upon expiration")
            } else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          } else if (flexi10Mins == '3') {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
          } else if (flexi10Mins == '4') {
            const buyForFrnd = prompt (
              "Enter the Recipient MSISDN \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
              const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
              )
              if (transfer.length == 4 && !isNaN(transfer)) {
                if (balance >= price) {
                  alert(`Transfer of 10mins+400MB+5SMS @\u20A6500 for 7days to ${buyForFrnd} was successful`)
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                }
              }  else {
                alert("Invalid Pin")
              }
            } else if (buyForFrnd == '22') {
            alert("Back")
            } else if (buyForFrnd == '0') {
            alert("Menu")
            }
            else {
              alert(`Invalid MSISDN`)
            }
          } else if (flexi10Mins == '22') { // back code remains
            alert("Back")
          } else if (flexi10Mins == '0') { // Menu code remains
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
          } else if(rpp == "2") {
            // Back and Menu Code remains
            const price = 1000
            const flexi20Mins = prompt( 
            "20mins+1.2GB+5sms @\u20A61000 (7days) \n" +
            "1 Buy & Auto Renew \n" +
            "2 Buy Once \n" +
            "3 Use SmartCash (10% cashback) \n" +
            "4 Buy for Others \n" +
            "# Back \n" +
            "0 Menu"
          )
          if (flexi20Mins == '1') {
            if (balance >= price) {
              alert("Dear Customer, your purchase of 20mins+1.2GB+5sms Flexi bundle @\u20A61000 for 7days was successful. Your data plan will automatically renew upon expiration")
            } else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          } else if (flexi20Mins == '2') {
            if (balance >= price) {
              alert("Dear Customer, your purchase of 20mins+1.2GB+5sms Flexi bundle @\u20A61000 for 7days was successful. Your data plan will not automatically renew upon expiration")
            } else {
              alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
            }
          } else if (flexi20Mins == '3') {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
          } else if (flexi20Mins == '4') {
            const buyForFrnd = prompt (
              "Enter the Recipient MSISDN \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
              const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
              )
              if (transfer.length == 4 && !isNaN(transfer)) {
                if (balance >= price) {
                  alert(`Transfer of 20mins+1.2GB+5SMS @\u20A61000 for 7days to ${buyForFrnd} was successful`)
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                }
              }  else {
                alert("Invalid Pin")
              }
            } else if (buyForFrnd == '22') {
            alert("Back")
            } else if (buyForFrnd == '0') {
            alert("Menu")
            }
            else {
              alert(`Invalid MSISDN`)
            }
          } else if (flexi20Mins == '22') { // back code remains
            alert("Back")
          } else if (flexi20Mins == '0') { // Menu code remains
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
          } else if (rpp == "3") {
             // Back and Menu Code remains
            const price = 2000
            const flexi40Mins = prompt( 
            "40mins+2.5GB+5sms @\u20A62000 (30days) \n" +
            "1 Buy & Auto Renew \n" +
            "2 Buy Once \n" +
            "3 Use SmartCash (10% cashback) \n" +
            "4 Buy for Others \n" +
            "# Back \n" +
            "0 Menu"
            )
            if (flexi40Mins == '1') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 40mins+2.5GB+5sms Flexi bundle @\u20A62000 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (flexi40Mins == '2') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 40mins+2.5GB+5sms Flexi bundle @\u20A62000 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (flexi40Mins == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (flexi40Mins == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 40mins+2.5GB+5SMS @\u20A62000 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (flexi40Mins == '22') { // back code remains
              alert("Back")
            } else if (flexi40Mins == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (rpp == "4") {
             // Back and Menu Code remains
            const price = 5000
            const flexi100Mins = prompt( 
            "100mins+12GB+5sms @\u20A65000 (30days) \n" +
            "1 Buy & Auto Renew \n" +
            "2 Buy Once \n" +
            "3 Use SmartCash (10% cashback) \n" +
            "4 Buy for Others \n" +
            "# Back \n" +
            "0 Menu"
            )
            if (flexi100Mins == '1') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 100mins+12GB+5sms Flexi bundle @\u20A65000 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (flexi100Mins == '2') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 100mins+12GB+5sms Flexi bundle @\u20A65000 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (flexi100Mins == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (flexi100Mins == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 100mins+ 12GB+5SMS @\u20A65000 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (flexi100Mins == '22') { // back code remains
              alert("Back")
            } else if (flexi100Mins == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (rpp == "#") {
            alert("Back")
          } else if (rpp == "0") {
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
        } else if (voiceBundles == 4) {
          const roam = prompt(
            "ROAM THE WORLD(RTW) \n" +
            "1 RTW- \u20A64500 \n" +
            "2 RTW- \u20A610000 \n" +
            "3 RTW- \u20A625000 \n" +
            "4 FREE INCOMING CALLS \n" +
            "5 CHECK BAL \n" +
            "Reply" 
          )
          if (roam == 1) {
            const rtw1 = prompt (
              "1 List of Countries \n" +
              "2 Proceed to buy \n" +
              "0 Menu \n" +
              "Reply"
            )
            if (rtw1 == "1") {
              const names = [
                {
                AFRICA: `
                "Angola", "Benin", "Cameroon", "Chad", "Congo-DR", "Egypt","Congo-B", "Gabon", "Gambia", "Ethiopia", "Malawi", "Kenya", "Niger" `
              },
              {
                AMERICAS: `
                "USA", "Canada", "Brazil", "Argentina", "Mexico", "Jamaica", "Dominica"`
              },
              {
                EUROPE: `
                "Albania", "Austria", "Belgium", "Czech", "Denmark", "Finland", "France", "Germany"`
              }, 
              {
                ASIA: `
                "India", "China", "Malaysia", "Vietnam", "Hong-Kong", "Japan", "South Korea"`
              },
              {
                MIDDLE_EAST : `
                "UAE", "Saudi-Arabia", "Israel, "Qatar", "Kuwait"`
              }
             ]
              console.log(names);
              
              const countries = prompt (
                "You will receive an SMS with the list of applicable countries and tariff shortly. \n" +
                "# Back \n" +
                "0 Main Menu"
              )
              if (countries == "#") {
                alert("Back")
              } else if (countries == "0") {
                alert("Main Menu")
              }
            } else if (rtw1 == "2") {
              // Back and Menu Code remains
              const price = 4500
              const dataPlan250 = prompt( 
              "250MB+10mins+10SMS @\u20A64500 for 1day when you roam in 60+ countries \n" +
              "1 Buy Once \n" +
              "2 Use SmartCash\n" +
              "3 Buy for Others \n" +
              "0 Menu"
              )
              if (dataPlan250 == '1') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 250MB+10mins+10SMS @\u20A64500 for 1day was successful.")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
              } else if (dataPlan250 == '2') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPlan250 == '3') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 250MB @\u20A6600 for 1day to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
              } else if (dataPlan250 == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (rtw1 == "0") {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (roam == 2) {
            const rtw2 = prompt (
              "1 List of Countries \n" +
              "2 Proceed to buy \n" +
              "0 Menu \n" +
              "Reply"
            )
            if (rtw2 == "1") {
              const names = [
                {
                AFRICA: `
                "Angola", "Benin", "Cameroon", "Chad", "Congo-DR", "Egypt","Congo-B", "Gabon", "Gambia", "Ethiopia", "Malawi", "Kenya", "Niger" `
              },
              {
                AMERICAS: `
                "USA", "Canada", "Brazil", "Argentina", "Mexico", "Jamaica", "Dominica"`
              },
              {
                EUROPE: `
                "Albania", "Austria", "Belgium", "Czech", "Denmark", "Finland", "France", "Germany"`
              }, 
              {
                ASIA: `
                "India", "China", "Malaysia", "Vietnam", "Hong-Kong", "Japan", "South Korea"`
              },
              {
                MIDDLE_EAST : `
                "UAE", "Saudi-Arabia", "Israel, "Qatar", "Kuwait"`
              }
             ]
              console.log(names);
              
              const countries = prompt (
                "You will receive an SMS with the list of applicable countries and tariff shortly. \n" +
                "# Back \n" +
                "0 Main Menu"
              )
              if (countries == "#") {
                alert("Back")
              } else if (countries == "0") {
                alert("Main Menu")
              }
            } else if (rtw2 == "2") {
              // Back and Menu Code remains
              const price = 10000
              const dataPlan1GB = prompt( 
              "1GB+15mins+15SMS @\u20A610000 for 1day when you roam in 60+ countries \n" +
              "1 Buy Once \n" +
              "2 Use SmartCash\n" +
              "3 Buy for Others \n" +
              "0 Menu"
              )
              if (dataPlan1GB == '1') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 1GB+15mins+15SMS @\u20A610000 for 10days was successful.")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
              } else if (dataPlan1GB == '2') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPlan1GB == '3') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 1GB @\u20A610000 for 10days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
              } else if (dataPlan1GB == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (rtw2 == "0") {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (roam == 3) {
            const rtw3 = prompt (
              "1 List of Countries \n" +
              "2 Proceed to buy \n" +
              "0 Menu \n" +
              "Reply"
            )
            if (rtw3 == "1") {
              const names = [
                {
                AFRICA: `
                "Angola", "Benin", "Cameroon", "Chad", "Congo-DR", "Egypt","Congo-B", "Gabon", "Gambia", "Ethiopia", "Malawi", "Kenya", "Niger" `
              },
              {
                AMERICAS: `
                "USA", "Canada", "Brazil", "Argentina", "Mexico", "Jamaica", "Dominica"`
              },
              {
                EUROPE: `
                "Albania", "Austria", "Belgium", "Czech", "Denmark", "Finland", "France", "Germany"`
              }, 
              {
                ASIA: `
                "India", "China", "Malaysia", "Vietnam", "Hong-Kong", "Japan", "South Korea"`
              },
              {
                MIDDLE_EAST : `
                "UAE", "Saudi-Arabia", "Israel, "Qatar", "Kuwait"`
              }
             ]
              console.log(names);
              
              const countries = prompt (
                "You will receive an SMS with the list of applicable countries and tariff shortly. \n" +
                "# Back \n" +
                "0 Main Menu"
              )
              if (countries == "#") {
                alert("Back")
              } else if (countries == "0") {
                alert("Main Menu")
              }
            } else if (rtw3 == "2") {
              // Back and Menu Code remains
              const price = 10000
              const dataPlan3GB = prompt( 
              "3GB+25mins+30SMS @\u20A625000 for 30days when you roam in 60+ countries \n" +
              "1 Buy Once \n" +
              "2 Use SmartCash\n" +
              "3 Buy for Others \n" +
              "0 Menu"
              )
              if (dataPlan3GB == '1') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 3GB+25mins+25SMS @\u20A625000 for 30days was successful.")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
              } else if (dataPlan3GB == '2') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPlan3GB == '3') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 3GB @\u20A625000 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
              } else if (dataPlan3GB == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (rtw3 == "0") {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (roam == 4) {
            const calls = prompt (
              "Dear Customer, you will receive an SMS with your data balance details shortly. \n" +
              "0 Menu"
            )
            if (calls == "0") {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (roam == 5) {
            const roamBalance = prompt(
              "Dear customer, you do not have an active Roaming Plan. \n" +
              "0 Menu"
            )
            if (roamBalance == "0") {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
        } else if (voiceBundles == 5) {
          const bal = prompt(
              "1 Talkmore \n" +
              "2 Flexi \n" +
              "3 6x/Wadata & Others \n" +
              "Reply"
            )
            if (bal == 1) {
              const talkMoreBalance = prompt (
              "Dear Customer, you will receive an SMS with your VOICE balance details shortly. \n" +
              "# Back \n" +
              "0 Main Menu"
            )
            if (talkMoreBalance == "#") {
              alert("Back")
            } else if (talkMoreBalance == "0") {
              alert("Menu")
            }  else {
              alert("Connection Problem or Invalid MMI Code")
            }
            } else if (bal == 2) {
              const flexiBalance = prompt (
              "Dear Customer, you will receive an SMS with your VOICE balance details shortly. \n" +
              "# Back \n" +
              "0 Main Menu"
            )
            if (flexiBalance == "#") {
              alert("Back")
            } else if (flexiBalance == "0") {
              alert("Menu")
            }  else {
              alert("Connection Problem or Invalid MMI Code")
            }
            } else if (bal == 3) {
              const watadaBalance = prompt (
              "Dear Customer, you do not have ANY active voice bundle. Dial *234# to buy voice bundle \n" +
              "# Back \n" +
              "0 Main Menu"
            )
            if (watadaBalance == "#") {
              alert("Bsck")
            } else if (watadaBalance == "0") {
              alert("Menu")
            }  else {
              alert("Connection Problem or Invalid MMI Code")
            }
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
        } else {
          alert("Connection problem or Invalid MMMI code")
        }
      } else if (nextPage === '11') {
        const mifiRtrPlans = prompt(
          "MiFi/Router Plans \n" +
          "1.MiFi Plan \n" +
          "2.Router Plan \n" +
          "3.5G ODU Plan \n" +
          "22 Back \n" +
          "0 Menu" 
        )
        if (mifiRtrPlans == "1") {
          const mifiPlans = prompt(
            "Mifi Plans: \n" +
            "1. 13GB+1GB Daily @\u20A65k \n" +
            "2. 35GB+2GB Daily @\u20A610k \n" +
            "3. 60GB+2GB Daily @\u20A615k \n" +
            "# Home \n" +
            "* Back \n" +
            "22 Back \n" +
            "0 Menu" 
          )
          if (mifiPlans == "1") {
            const price = 5000
            const mifiNumber = prompt (
              "Enter Mifi No: \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (mifiNumber.length == 11 && !isNaN(mifiNumber) && (mifiNumber.startsWith("070") || mifiNumber.startsWith("080") || mifiNumber.startsWith("081") || mifiNumber.startsWith("090") || mifiNumber.startsWith("091"))) {
              if (balance >= price) {
                  alert(`Activation of 13GB+1GB Daily @\u20A65000 for 30days to ${mifiNumber} was successful`)
              } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (mifiNumber == '22') {
            alert("Back")
            } else if (mifiNumber == '0') {
            alert("Menu")
            }
            else {
              alert(`Invalid MSISDN`)
            }
          } else if (mifiPlans == "2") {
            const price = 10000
            const mifiNumber = prompt (
              "Enter Mifi No: \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (mifiNumber.length == 11 && !isNaN(mifiNumber) && (mifiNumber.startsWith("070") || mifiNumber.startsWith("080") || mifiNumber.startsWith("081") || mifiNumber.startsWith("090") || mifiNumber.startsWith("091"))) {
              if (balance >= price) {
                  alert(`Activation of 35GB+2GB Daily @\u20A610000 for 30days to ${mifiNumber} was successful`)
              } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (mifiNumber == '22') {
            alert("Back")
            } else if (mifiNumber == '0') {
            alert("Menu")
            }
            else {
              alert(`Invalid MSISDN`)
            }
          } else if (mifiPlans == "3") {
            const price = 15000
            const mifiNumber = prompt (
              "Enter Mifi No: \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (mifiNumber.length == 11 && !isNaN(mifiNumber) && (mifiNumber.startsWith("070") || mifiNumber.startsWith("080") || mifiNumber.startsWith("081") || mifiNumber.startsWith("090") || mifiNumber.startsWith("091"))) {
              if (balance >= price) {
                  alert(`Activation of 60GB+2GB Daily @\u20A615000 for 30days to ${mifiNumber} was successful`)
              } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (mifiNumber == '22') {
            alert("Back")
            } else if (mifiNumber == '0') {
            alert("Menu")
            }
            else {
              alert(`Invalid MSISDN`)
            }
          } else if (mifiPlans == "#") {
            alert("Home")
          } else if (mifiPlans == "*") {
            alert("Back")
          } else if (mifiPlans == "22") {
            alert("Back")
          } else if (mifiPlans == "0") {
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
        } else if (mifiRtrPlans == "2") {
          const router = prompt(
            "Router Plan \n" +
            "1. 100GB+2GB Daily@\u20A620k \n" +
            "2. Unltd 20MBPS@30k \n" +
            "3. Unltd 60MBPS@50K \n" +
            "4. Unltd 20MBPS (X3)@\u20A680k \n" +
            "5. Unltd 60MBPS (X3)@135K \n" +
            "# Home \n" +
            "* Back \n" +
            "n next" 
          )
          if (router == "1") {
            const price = 20000
            const routerNumber = prompt (
              "Enter Router No: \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (routerNumber.length == 11 && !isNaN(routerNumber) && (routerNumber.startsWith("070") || routerNumber.startsWith("080") || routerNumber.startsWith("081") || routerNumber.startsWith("090") || routerNumber.startsWith("091"))) {
              if (balance >= price) {
                  alert(`Activation of 100GB+2GB Daily @\u20A620000 for 30days to ${routerNumber} was successful`)
              } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (routerNumber == '22') {
            alert("Back")
            } else if (routerNumber == '0') {
            alert("Menu")
            }
            else {
              alert(`Invalid MSISDN`)
            }
          } else if (router == "2") {
            const price = 30000
            const routerNumber = prompt (
              "Enter Router No: \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (routerNumber.length == 11 && !isNaN(routerNumber) && (routerNumber.startsWith("070") || routerNumber.startsWith("080") || routerNumber.startsWith("081") || routerNumber.startsWith("090") || routerNumber.startsWith("091"))) {
              if (balance >= price) {
                  alert(`Activation of Unlimited 20MBPS @\u20A630000 for 30days to ${routerNumber} was successful`)
              } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (routerNumber == '22') {
            alert("Back")
            } else if (routerNumber == '0') {
            alert("Menu")
            }
            else {
              alert(`Invalid MSISDN`)
            }
          } else if (router == "3") {
            const price = 80000
            const routerNumber = prompt (
              "Enter Router No: \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (routerNumber.length == 11 && !isNaN(routerNumber) && (routerNumber.startsWith("070") || routerNumber.startsWith("080") || routerNumber.startsWith("081") || routerNumber.startsWith("090") || routerNumber.startsWith("091"))) {
              if (balance >= price) {
                  alert(`Activation Unlimited 60MBPS@\u20A650000 for 30days to ${routerNumber} was successful`)
              } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (routerNumber == '22') {
            alert("Back")
            } else if (routerNumber == '0') {
            alert("Menu")
            }
            else {
              alert(`Invalid MSISDN`)
            }
          } else if (router == "4") {
           const price = 20000
            const routerNumber = prompt (
              "Enter Router No: \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (routerNumber.length == 11 && !isNaN(routerNumber) && (routerNumber.startsWith("070") || routerNumber.startsWith("080") || routerNumber.startsWith("081") || routerNumber.startsWith("090") || routerNumber.startsWith("091"))) {
              if (balance >= price) {
                  alert(`Activation of Unlimited 20MBPS(X3) @\u20A680000 for 30days to ${routerNumber} was successful`)
              } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (routerNumber == '22') {
            alert("Back")
            } else if (routerNumber == '0') {
            alert("Menu")
            }
            else {
              alert(`Invalid MSISDN`)
            }
          } else if (router == "5") {
            const price = 135000
            const routerNumber = prompt (
              "Enter Router No: \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (routerNumber.length == 11 && !isNaN(routerNumber) && (routerNumber.startsWith("070") || routerNumber.startsWith("080") || routerNumber.startsWith("081") || routerNumber.startsWith("090") || routerNumber.startsWith("091"))) {
              if (balance >= price) {
                  alert(`Activation of Unlimited 60MBPS (X3)@\u20A6135000 for 30days to ${routerNumber} was successful`)
              } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (routerNumber == '22') {
            alert("Back")
            } else if (routerNumber == '0') {
            alert("Menu")
            }
            else {
              alert(`Invalid MSISDN`)
            }
          } else if (router == "#") {
            alert("Home")
          } else if (router == "*") {
            alert("Back")
          } else if (router == "n") {
            const next = prompt(
              "6. Unltd 20MBPS (X6)@\u20A6150K \n" +
              "# Home \n" +
              "b back \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (next == "6") {
              const price = 150000
              const routerNumber = prompt (
                "Enter Router No: \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (routerNumber.length == 11 && !isNaN(routerNumber) && (routerNumber.startsWith("070") || routerNumber.startsWith("080") || routerNumber.startsWith("081") || routerNumber.startsWith("090") || routerNumber.startsWith("091"))) {
                if (balance >= price) {
                    alert(`Activation of Unlimited 20MBPS (X6) @\u20A6150000 for 30days to ${routerNumber} was successful`)
                } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                }
              } else if (routerNumber == '22') {
              alert("Back")
              } else if (routerNumber == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (next == "#") {
              alert("Home")
            } else if (next == "b") {
              alert("back")
            } else if (next == "22") {
              alert("Back")
            } else if (next == "0") {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
        } else if (mifiRtrPlans == "3") {
            const oduNumber = prompt (
              "Enter Router No: \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (oduNumber.length == 11 && !isNaN(oduNumber) && (oduNumber.startsWith("070") || oduNumber.startsWith("080") || oduNumber.startsWith("081") || oduNumber.startsWith("090") || oduNumber.startsWith("091"))) {
              alert(`Activation of 5g ODU Plan was Successful`)
            } else if (oduNumber == '22') {
            alert("Back")
            } else if (oduNumber == '0') {
            alert("Menu")
            }
            else {
              alert(`Invalid MSISDN`)
            }
        } else if (mifiRtrPlans == "22") {
          alert("Back")
        } else if (mifiRtrPlans == "0") {
          alert("Menu")
        } else {
          alert("Connection Problem or Invalid MMI Code")
        }
      } else if (nextPage === '12') {
        const roam = prompt(
            "ROAM THE WORLD(RTW) \n" +
            "1 RTW- \u20A64500 \n" +
            "2 RTW- \u20A610000 \n" +
            "3 RTW- \u20A625000 \n" +
            "4 FREE INCOMING CALLS \n" +
            "5 CHECK BAL \n" +
            "Reply" 
        )
        if (roam == 1) {
            const rtw1 = prompt (
              "1 List of Countries \n" +
              "2 Proceed to buy \n" +
              "0 Menu \n" +
              "Reply"
            )
            if (rtw1 == "1") {
              const names = [
                {
                AFRICA: `
                "Angola", "Benin", "Cameroon", "Chad", "Congo-DR", "Egypt","Congo-B", "Gabon", "Gambia", "Ethiopia", "Malawi", "Kenya", "Niger" `
              },
              {
                AMERICAS: `
                "USA", "Canada", "Brazil", "Argentina", "Mexico", "Jamaica", "Dominica"`
              },
              {
                EUROPE: `
                "Albania", "Austria", "Belgium", "Czech", "Denmark", "Finland", "France", "Germany"`
              }, 
              {
                ASIA: `
                "India", "China", "Malaysia", "Vietnam", "Hong-Kong", "Japan", "South Korea"`
              },
              {
                MIDDLE_EAST : `
                "UAE", "Saudi-Arabia", "Israel, "Qatar", "Kuwait"`
              }
             ]
              console.log(names);
              
              const countries = prompt (
                "You will receive an SMS with the list of applicable countries and tariff shortly. \n" +
                "# Back \n" +
                "0 Main Menu"
              )
              if (countries == "#") {
                alert("Back")
              } else if (countries == "0") {
                alert("Main Menu")
              }
            } else if (rtw1 == "2") {
              // Back and Menu Code remains
              const price = 4500
              const dataPlan250 = prompt( 
              "250MB+10mins+10SMS @\u20A64500 for 1day when you roam in 60+ countries \n" +
              "1 Buy Once \n" +
              "2 Use SmartCash\n" +
              "3 Buy for Others \n" +
              "0 Menu"
              )
              if (dataPlan250 == '1') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 250MB+10mins+10SMS @\u20A64500 for 1day was successful.")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
              } else if (dataPlan250 == '2') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPlan250 == '3') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 250MB @\u20A6600 for 1day to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
              } else if (dataPlan250 == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (rtw1 == "0") {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (roam == 2) {
            const rtw2 = prompt (
              "1 List of Countries \n" +
              "2 Proceed to buy \n" +
              "0 Menu \n" +
              "Reply"
            )
            if (rtw2 == "1") {
              const names = [
                {
                AFRICA: `
                "Angola", "Benin", "Cameroon", "Chad", "Congo-DR", "Egypt","Congo-B", "Gabon", "Gambia", "Ethiopia", "Malawi", "Kenya", "Niger" `
              },
              {
                AMERICAS: `
                "USA", "Canada", "Brazil", "Argentina", "Mexico", "Jamaica", "Dominica"`
              },
              {
                EUROPE: `
                "Albania", "Austria", "Belgium", "Czech", "Denmark", "Finland", "France", "Germany"`
              }, 
              {
                ASIA: `
                "India", "China", "Malaysia", "Vietnam", "Hong-Kong", "Japan", "South Korea"`
              },
              {
                MIDDLE_EAST : `
                "UAE", "Saudi-Arabia", "Israel, "Qatar", "Kuwait"`
              }
             ]
              console.log(names);
              
              const countries = prompt (
                "You will receive an SMS with the list of applicable countries and tariff shortly. \n" +
                "# Back \n" +
                "0 Main Menu"
              )
              if (countries == "#") {
                alert("Back")
              } else if (countries == "0") {
                alert("Main Menu")
              }
            } else if (rtw2 == "2") {
              // Back and Menu Code remains
              const price = 10000
              const dataPlan1GB = prompt( 
              "1GB+15mins+15SMS @\u20A610000 for 1day when you roam in 60+ countries \n" +
              "1 Buy Once \n" +
              "2 Use SmartCash\n" +
              "3 Buy for Others \n" +
              "0 Menu"
              )
              if (dataPlan1GB == '1') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 1GB+15mins+15SMS @\u20A610000 for 10days was successful.")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
              } else if (dataPlan1GB == '2') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPlan1GB == '3') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 1GB @\u20A610000 for 10days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
              } else if (dataPlan1GB == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (rtw2 == "0") {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (roam == 3) {
            const rtw3 = prompt (
              "1 List of Countries \n" +
              "2 Proceed to buy \n" +
              "0 Menu \n" +
              "Reply"
            )
            if (rtw3 == "1") {
              const names = [
                {
                AFRICA: `
                "Angola", "Benin", "Cameroon", "Chad", "Congo-DR", "Egypt","Congo-B", "Gabon", "Gambia", "Ethiopia", "Malawi", "Kenya", "Niger" `
              },
              {
                AMERICAS: `
                "USA", "Canada", "Brazil", "Argentina", "Mexico", "Jamaica", "Dominica"`
              },
              {
                EUROPE: `
                "Albania", "Austria", "Belgium", "Czech", "Denmark", "Finland", "France", "Germany"`
              }, 
              {
                ASIA: `
                "India", "China", "Malaysia", "Vietnam", "Hong-Kong", "Japan", "South Korea"`
              },
              {
                MIDDLE_EAST : `
                "UAE", "Saudi-Arabia", "Israel, "Qatar", "Kuwait"`
              }
             ]
              console.log(names);
              
              const countries = prompt (
                "You will receive an SMS with the list of applicable countries and tariff shortly. \n" +
                "# Back \n" +
                "0 Main Menu"
              )
              if (countries == "#") {
                alert("Back")
              } else if (countries == "0") {
                alert("Main Menu")
              }
            } else if (rtw3 == "2") {
              // Back and Menu Code remains
              const price = 10000
              const dataPlan3GB = prompt( 
              "3GB+25mins+30SMS @\u20A625000 for 30days when you roam in 60+ countries \n" +
              "1 Buy Once \n" +
              "2 Use SmartCash\n" +
              "3 Buy for Others \n" +
              "0 Menu"
              )
              if (dataPlan3GB == '1') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 3GB+25mins+25SMS @\u20A625000 for 30days was successful.")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
              } else if (dataPlan3GB == '2') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (dataPlan3GB == '3') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 3GB @\u20A625000 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
              } else if (dataPlan3GB == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (rtw3 == "0") {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (roam == 4) {
            const calls = prompt (
              "Dear Customer, you will receive an SMS with your data balance details shortly. \n" +
              "0 Menu"
            )
            if (calls == "0") {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (roam == 5) {
            const roamBalance = prompt(
              "Dear customer, you do not have an active Roaming Plan. \n" +
              "0 Menu"
            )
            if (roamBalance == "0") {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }  
      } else if (nextPage === '13') {
        const socialPlans = prompt(
          "1 \u20A6100/200MB \n" +
          "2 \u20A6300/1GB \n" +
          "3 \u20A6500/1.5GB \n" +
          "4 \u20A62000/8GB(EbonyLife) \n" +
          "5 \u20A610000/60GB(EbonyLife) \n" +
          "22 Back \n" +
          "0 Menu" 
        )
        if (socialPlans == "1") {
          const social200MB = prompt(
            "200MB Social @\u20A6100 (2days). Select how to pay: \n" +
            "1 With Airtime - \u20A6100 \n" +
            "2 With Smartcash - \u20A690 \n" +
            "22 Back \n" +
            "0 Menu" 
          )
          if (social200MB == "1") {
            const price = 100
            const dataPlan200MB = prompt(
              "200MB Social @\u20A6100 (2days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan200MB == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 200MB Social plan @\u20A6100 for 2days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan200MB == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 200MB Social plan @\u20A6100 for 2days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan200MB == '3') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 200MB Social @\u20A6100 for 2days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan200MB == '22') {
              alert("Back")
            } else if (dataPlan200MB == '0') {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (social200MB == "2") {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you.")
          } else if (social200MB == "22") {
            alert("back")
          } else if (social200MB == "0") {
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
        } else if (socialPlans == "2") {
          const social1GB = prompt(
            "1GB Social @\u20A6300 (3days). Select how to pay: \n" +
            "1 With Airtime - \u20A6100 \n" +
            "2 With Smartcash - \u20A690 \n" +
            "22 Back \n" +
            "0 Menu" 
          )
          if (social1GB == "1") {
            const price = 300
            const dataPlan1GB = prompt(
              "1GB Social @\u20A6300 (3days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan1GB == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 1GB Social plan @\u20A6300 for 3days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan1GB == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 1GB Social plan @\u20A6300 for 3days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan1GB == '3') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 1GB Social @\u20A6300 for 3days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan1GB == '22') {
              alert("Back")
            } else if (dataPlan1GB == '0') {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (social1GB == "2") {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you.")
          } else if (social1GB == "22") {
            alert("back")
          } else if (social1GB == "0") {
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
        } else if (socialPlans == "3") {
          const social1_5GB = prompt(
            "1.5GB Social @\u20A6300 (3days). Select how to pay: \n" +
            "1 With Airtime - \u20A6500 \n" +
            "2 With Smartcash - \u20A6450 \n" +
            "22 Back \n" +
            "0 Menu" 
          )
          if (social1_5GB == "1") {
            const price = 500
            const dataPlan1_5GB = prompt(
              "1.5GB Social @\u20A6500 (3days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan1_5GB == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 1.5GB Social plan @\u20A6500 for 3days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan1_5GB == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 1.5GB Social plan @\u20A6500 for 3days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan1_5GB == '3') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 1.5GB Social @\u20A6500 for 3days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan1_5GB == '22') {
              alert("Back")
            } else if (dataPlan1_5GB == '0') {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (social1_5GB == "2") {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you.")
          } else if (social1_5GB == "22") {
            alert("back")
          } else if (social1_5GB == "0") {
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
        } else if (socialPlans == "4") {
          const social8GB = prompt(
            "8GB Social @\u20A62000 valid for 30days.\n" +
            "This plan can only be used for EbonylifeOnPlus. \n" +
            "1 With Airtime - \u20A62000 \n" +
            "2 With Smartcash - \u20A61800 \n" +
            "22 Back \n" +
            "0 Menu" 
          )
          if (social8GB == "1") {
            const price = 2000
            const dataPlan8GB = prompt(
              "8GB Social @\u20A62000 (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan8GB == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 8GB Social plan @\u20A62000 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan8GB == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 8GB Social plan @\u20A62000 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan8GB == '3') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 8GB Social @\u20A62000 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan8GB == '22') {
              alert("Back")
            } else if (dataPlan8GB == '0') {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (social8GB == "2") {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you.")
          } else if (social8GB == "22") {
            alert("back")
          } else if (social8GB == "0") {
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
        } else if (socialPlans == "5") {
          const social60GB = prompt(
            "60GB Social @\u20A610000 valid for 365days.\n" +
            "This plan can only be used for EbonylifeOnPlus. \n" +
            "1 With Airtime - \u20A610000 \n" +
            "2 With Smartcash - \u20A69800 \n" +
            "22 Back \n" +
            "0 Menu" 
          )
          if (social60GB == "1") {
            const price = 10000
            const dataPlan60GB = prompt(
              "60GB Social @\u20A610000 (365days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Buy for Others \n" +
              "22 Back \n" +
              "0 Menu"
            )
            if (dataPlan60GB == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 60GB Social plan @\u20A610000 for 365days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan60GB == '2') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 60GB Social plan @\u20A610000 for 365days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
              }
            } else if (dataPlan60GB == '3') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 60GB Social @\u20A610000 for 365days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (dataPlan60GB == '22') {
              alert("Back")
            } else if (dataPlan60GB == '0') {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (social60GB == "2") {
            alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you.")
          } else if (social60GB == "22") {
            alert("back")
          } else if (social60GB == "0") {
            alert("Menu")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
        } else if (socialPlans == "22") {
          alert("Back")
        } else if (socialPlans == "0") {
          alert("Menu")
        } else {
          alert("Connection Problem or Invalid MMI Code")
        }
      } else if (nextPage === '14') {
        const everydayPlan = prompt(
          "1 \u20A64000/15GB \n" +
          "2 \u20A67500/40GB \n" +
          "3 Check Balance \n" +
          "22 Back \n" +
          "0 Menu"
        )
        if (everydayPlan == "1") {
          const price = 5000
          const dataPlan15Gb = prompt(
                "50MB Daily @\u20A64000 (30days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
          )
          if (dataPlan15Gb == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 500MB Daily @\u20A64000 for 30days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
          } else if (dataPlan15Gb == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 500MB Daily @\u20A64000 for 30days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
          } else if (dataPlan15Gb == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
          } else if (dataPlan15Gb == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 500MB Daily @\u20A64000 for 30days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
          } else if (dataPlan15Gb == '22') { // back code remains
                alert("Back")
          } else if (dataPlan15Gb == '0') { // Menu code remains
                alert("Menu")
          } else {
                alert("Connection Problem or Invalid MMI Code")
          }
        } else if (everydayPlan == "2") {
          const price = 7500
          const dataPlan40Gb = prompt(
                "51.3GB Daily @\u20A67500 (30days) \n" +
                "1 Buy & Auto Renew \n" +
                "2 Buy Once \n" +
                "3 Use SmartCash (10% cashback) \n" +
                "4 Buy for Others \n" +
                "22 Back \n" +
                "0 Menu"
          )
          if (dataPlan40Gb == '1') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 1.3GB Daily @\u20A67500 for 30days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
          } else if (dataPlan40Gb == '2') {
                if (balance >= price) { 
                  alert("Dear Customer, your purchase of 1.3GB Daily @\u20A67500 for 30days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
                }
          } else if (dataPlan40Gb == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
          } else if (dataPlan40Gb == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 1.3GB Daily @\u20A67500 for 30days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
          } else if (dataPlan40Gb == '22') { // back code remains
                alert("Back")
          } else if (dataPlan40Gb == '0') { // Menu code remains
                alert("Menu")
          } else {
                alert("Connection Problem or Invalid MMI Code")
          }
        } else if (everydayPlan == "3") {
          const allBalance = prompt(
            "Check DATA / VOICE BALANCE \n" +
            "1 DATA Balance \n" +
            "2 ROUTER Balance \n" +
            "3 MIFI Balance \n" +
            "4 VOICE Balance \n" +
            "5 ROAMING Balance \n" +
            "Reply" 
          )
          if (allBalance == "1") {
            alert("Dear Customer, you will receive an SMS with your Data Balance details Shortly")
            console.log(balance);
          } else if (allBalance == "2") {
            const routerBalance = prompt (
              "Enter Router No: \n"
            )
            if (routerBalance.length == 11 && !isNaN(routerBalance) && (routerBalance.startsWith("070") || routerBalance.startsWith("080") || routerBalance.startsWith("081") || routerBalance.startsWith("090") || routerBalance.startsWith("091"))) {
              alert(`Dear Customer, you do not have any active data plan`)
            }else {
              alert(`Invalid MSISDN`)
            }
          } else if (allBalance == "3") {
            const mifiBalance = prompt (
              "Enter mifi No: \n"
            )
            if (mifiBalance.length == 11 && !isNaN(mifiBalance) && (mifiBalance.startsWith("070") || mifiBalance.startsWith("080") || mifiBalance.startsWith("081") || mifiBalance.startsWith("090") || mifiBalance.startsWith("091"))) {
              alert(`Dear Customer, you do not have any active data plan`)
            }else {
              alert(`Invalid MSISDN`)
            }
          } else if (allBalance == "4") {
            const bal = prompt(
              "1 Talkmore \n" +
              "2 Flexi \n" +
              "3 6x/Wadata & Others \n" +
              "Reply"
            )
            if (bal == 1) {
              const talkMoreBalance = prompt (
              "Dear Customer, you will receive an SMS with your VOICE balance details shortly. \n" +
              "# Back \n" +
              "0 Main Menu"
            )
            if (talkMoreBalance == "#") {
              alert("Back")
            } else if (talkMoreBalance == "0") {
              alert("Menu")
            }  else {
              alert("Connection Problem or Invalid MMI Code")
            }
            } else if (bal == 2) {
              const flexiBalance = prompt (
              "Dear Customer, you will receive an SMS with your VOICE balance details shortly. \n" +
              "# Back \n" +
              "0 Main Menu"
            )
            if (flexiBalance == "#") {
              alert("Back")
            } else if (flexiBalance == "0") {
              alert("Menu")
            }  else {
              alert("Connection Problem or Invalid MMI Code")
            }
            } else if (bal == 3) {
              const watadaBalance = prompt (
              "Dear Customer, you do not have ANY active voice bundle. Dial *234# to buy voice bundle \n" +
              "# Back \n" +
              "0 Main Menu"
              )
              if (watadaBalance == "#") {
                alert("Back")
              } else if (watadaBalance == "0") {
                alert("Menu")
              }  else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (allBalance == "5") {
            alert("Dear customer, you do not have any active Roaming plan")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
        } else if (everydayPlan == "22") {
          alert("Back")
        } else if (everydayPlan == "0") {
          alert("Menu")
        } else {
          alert("Connection Problem or Invalid MMI Code")
        }
      } else if (nextPage === '15') {
        const borrow = prompt(
          "Airtel Extra Credit \n" +
          "I consent to the use of my personal data to access Airtel Extra Credit \n\n" +
          "1. Yes/Accept \n" +
          "2. No/Decline \n" +
          "Reply with your choice"
        )
        if (borrow == "1") {
          const extraCredit = prompt(
            "Airtel Extra Credit \n" +
            "0. Borrow Talk time \n" +
            "1. Eligibility and Help \n" +
            "2. Borrow Airtime \n" +
            "3. Borrow Data \n" +
            "4. Loan Balance \n" +
            "5. Suspend Service \n" +
            "Reply \n" +
            "* Next"
          )
          if (extraCredit == "0") {
            alert("Service temporarily unavailable, please try again after sometime\n\n Thank You")
          } else if (extraCredit == "1") {
            const eligible = prompt(
              "Reply with: \n" +
              "1 For Eligibility \n" +
              "2 For Help"
            )
            if (eligible == 1) {
              alert("Service temporarily unavailable, please try again after sometime \n\n Thank You")
            } else if (eligible == 2) {
              alert("You do not have any outstanding loans")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (extraCredit == "2") {
            alert("Service temporarily unavailable, please try again after sometime\n\n Thank You")
          } else if (extraCredit == "3") {
            alert("Service temporarily unavailable, please try again after sometime\n\n Thank You")
          } else if (extraCredit == "4") {
            alert("You do not have any pending loan to refund")
          } else if (extraCredit == "5") {
            alert("You have been SUSPENDED from taking airtime/data loans. To RE-ACTIVATE, dial *303#.")
          } else if (extraCredit == "*") {
            alert("with your choice")
          }
        } else if (borrow == "2") {
          alert("Decline")
        } else {
          alert("Connection Problem or Invalid MMI Code")
        }
      } else if (nextPage === '16') {
        const allBalance = prompt(
            "Check DATA / VOICE BALANCE \n" +
            "1 DATA Balance \n" +
            "2 ROUTER Balance \n" +
            "3 MIFI Balance \n" +
            "4 VOICE Balance \n" +
            "5 ROAMING Balance \n" +
            "Reply" 
          )
          if (allBalance == "1") {
            alert("Dear Customer, you will receive an SMS with your Data Balance details Shortly")
            console.log(balance);
          } else if (allBalance == "2") {
            const routerBalance = prompt (
              "Enter Router No: \n"
            )
            if (routerBalance.length == 11 && !isNaN(routerBalance) && (routerBalance.startsWith("070") || routerBalance.startsWith("080") || routerBalance.startsWith("081") || routerBalance.startsWith("090") || routerBalance.startsWith("091"))) {
              alert(`Dear Customer, you do not have any active data plan`)
            }else {
              alert(`Invalid MSISDN`)
            }
          } else if (allBalance == "3") {
            const mifiBalance = prompt (
              "Enter mifi No: \n"
            )
            if (mifiBalance.length == 11 && !isNaN(mifiBalance) && (mifiBalance.startsWith("070") || mifiBalance.startsWith("080") || mifiBalance.startsWith("081") || mifiBalance.startsWith("090") || mifiBalance.startsWith("091"))) {
              alert(`Dear Customer, you do not have any active data plan`)
            }else {
              alert(`Invalid MSISDN`)
            }
          } else if (allBalance == "4") {
            const bal = prompt(
              "1 Talkmore \n" +
              "2 Flexi \n" +
              "3 6x/Wadata & Others \n" +
              "Reply"
            )
            if (bal == 1) {
              const talkMoreBalance = prompt (
              "Dear Customer, you will receive an SMS with your VOICE balance details shortly. \n" +
              "# Back \n" +
              "0 Main Menu"
            )
            if (talkMoreBalance == "#") {
              alert("Back")
            } else if (talkMoreBalance == "0") {
              alert("Menu")
            }  else {
              alert("Connection Problem or Invalid MMI Code")
            }
            } else if (bal == 2) {
              const flexiBalance = prompt (
              "Dear Customer, you will receive an SMS with your VOICE balance details shortly. \n" +
              "# Back \n" +
              "0 Main Menu"
            )
            if (flexiBalance == "#") {
              alert("Back")
            } else if (flexiBalance == "0") {
              alert("Menu")
            }  else {
              alert("Connection Problem or Invalid MMI Code")
            }
            } else if (bal == 3) {
              const watadaBalance = prompt (
              "Dear Customer, you do not have ANY active voice bundle. Dial *234# to buy voice bundle \n" +
              "# Back \n" +
              "0 Main Menu"
              )
              if (watadaBalance == "#") {
                alert("Back")
              } else if (watadaBalance == "0") {
                alert("Menu")
              }  else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (allBalance == "5") {
            alert("Dear customer, you do not have any active Roaming plan")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
      } else if (nextPage === '0') {
        alert("Menu")
      } else(
        alert("Invalid Input")
      )
    } else {
      alert("Invalid Input Try again");
    }

    // Recharge Section
  } else if (ussdPrompt == 2) {
    alert("Please dial *311*recharge pin # to recharge your account");
  } else if (ussdPrompt == 3) { 
    // Borrow Section
    const borrow = prompt(
          "Airtel Extra Credit \n" +
          "I consent to the use of my personal data to access Airtel Extra Credit \n\n" +
          "1. Yes/Accept \n" +
          "2. No/Decline \n" +
          "Reply with your choice"
        )
        if (borrow == "1") {
          const extraCredit = prompt(
            "Airtel Extra Credit \n" +
            "0. Borrow Talk time \n" +
            "1. Eligibility and Help \n" +
            "2. Borrow Airtime \n" +
            "3. Borrow Data \n" +
            "4. Loan Balance \n" +
            "5. Suspend Service \n" +
            "Reply \n" +
            "* Next"
          )
          if (extraCredit == "0") {
            alert("Service temporarily unavailable, please try again after sometime\n\n Thank You")
          } else if (extraCredit == "1") {
            const eligible = prompt(
              "Reply with: \n" +
              "1 For Eligibility \n" +
              "2 For Help"
            )
            if (eligible == 1) {
              alert("Service temporarily unavailable, please try again after sometime \n\n Thank You")
            } else if (eligible == 2) {
              alert("You do not have any outstanding loans")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (extraCredit == "2") {
            alert("Service temporarily unavailable, please try again after sometime\n\n Thank You")
          } else if (extraCredit == "3") {
            alert("Service temporarily unavailable, please try again after sometime\n\n Thank You")
          } else if (extraCredit == "4") {
            alert("You do not have any pending loan to refund")
          } else if (extraCredit == "5") {
            alert("You have been SUSPENDED from taking airtime/data loans. To RE-ACTIVATE, dial *303#.")
          } else if (extraCredit == "*") {
            alert("with your choice")
          }
        } else if (borrow == "2") {
          alert("Decline")
        } else {
          alert("Connection Problem or Invalid MMI Code")
        }
  } else if (ussdPrompt == 4) {
    // Account Balance Section
    alert(`Dear Customer your account balance is \u20A6${balance}`);
  } else if (ussdPrompt == 5) {
    // Data Bal Section
    const allBalance = prompt(
            "Check DATA / VOICE BALANCE \n" +
            "1 DATA Balance \n" +
            "2 ROUTER Balance \n" +
            "3 MIFI Balance \n" +
            "4 VOICE Balance \n" +
            "5 ROAMING Balance \n" +
            "Reply" 
          )
          if (allBalance == "1") {
            alert("Dear Customer, you will receive an SMS with your Data Balance details Shortly")
            console.log(`Dear Customer you do not have any active data bundle`);
          } else if (allBalance == "2") {
            const routerBalance = prompt (
              "Enter Router No: \n"
            )
            if (routerBalance.length == 11 && !isNaN(routerBalance) && (routerBalance.startsWith("070") || routerBalance.startsWith("080") || routerBalance.startsWith("081") || routerBalance.startsWith("090") || routerBalance.startsWith("091"))) {
              alert(`Dear Customer, you do not have any active data plan`)
            }else {
              alert(`Invalid MSISDN`)
            }
          } else if (allBalance == "3") {
            const mifiBalance = prompt (
              "Enter mifi No: \n"
            )
            if (mifiBalance.length == 11 && !isNaN(mifiBalance) && (mifiBalance.startsWith("070") || mifiBalance.startsWith("080") || mifiBalance.startsWith("081") || mifiBalance.startsWith("090") || mifiBalance.startsWith("091"))) {
              alert(`Dear Customer, you do not have any active data plan`)
            }else {
              alert(`Invalid MSISDN`)
            }
          } else if (allBalance == "4") {
            const bal = prompt(
              "1 Talkmore \n" +
              "2 Flexi \n" +
              "3 6x/Wadata & Others \n" +
              "Reply"
            )
            if (bal == 1) {
              const talkMoreBalance = prompt (
              "Dear Customer, you will receive an SMS with your VOICE balance details shortly. \n" +
              "# Back \n" +
              "0 Main Menu"
            )
            if (talkMoreBalance == "#") {
              alert("Back")
            } else if (talkMoreBalance == "0") {
              alert("Menu")
            }  else {
              alert("Connection Problem or Invalid MMI Code")
            }
            } else if (bal == 2) {
              const flexiBalance = prompt (
              "Dear Customer, you will receive an SMS with your VOICE balance details shortly. \n" +
              "# Back \n" +
              "0 Main Menu"
            )
            if (flexiBalance == "#") {
              alert("Back")
            } else if (flexiBalance == "0") {
              alert("Menu")
            }  else {
              alert("Connection Problem or Invalid MMI Code")
            }
            } else if (bal == 3) {
              const watadaBalance = prompt (
              "Dear Customer, you do not have ANY active voice bundle. Dial *234# to buy voice bundle \n" +
              "# Back \n" +
              "0 Main Menu"
              )
              if (watadaBalance == "#") {
                alert("Back")
              } else if (watadaBalance == "0") {
                alert("Menu")
              }  else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (allBalance == "5") {
            alert("Dear customer, you do not have any active Roaming plan")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
  } else if (ussdPrompt == "*") {
    // Next Page Section
    const nextPrompt = prompt(
      "6 Me2U \n" +
      "7 VAS \n" +
      "8 NIN \n" +
      "9 Self Service \n" +
      "# Previous \n" +
      "Reply" 
    )
    if (nextPrompt == "6") {
      const me2U = prompt(
        "Welcome to Airtel Me2U \n" +
        "1 Airtel to Airtel \n" +
        "2 Gift Data Bundle \n" +
        "3 PIN Management \n" +
        "4 INFO \n" +
        "5 HELP"
      )
      if (me2U == 1) {
        const airtel2Airtel = prompt(
          "Enter the Airtel number you wish to transfer airtime to"
        )
        if (airtel2Airtel.length == 11 && !isNaN(airtel2Airtel) && (airtel2Airtel.startsWith("070") || airtel2Airtel.startsWith("080") || airtel2Airtel.startsWith("081") || airtel2Airtel.startsWith("090") || airtel2Airtel.startsWith("091"))) {
                const amt = prompt(`Enter amount to transfer to ${airtel2Airtel} \n`
                )
                if (amt >= 50 && amt <= 10000) {
                  const pin = prompt("Enter your pin to complete transaction")
                  if (pin.length == 4 && !isNaN(pin)) {
                    if (balance >= amt) {
                      alert(`Transfer of \u20A6${amt} to ${airtel2Airtel} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }else {
                   alert("Invalid Pin")
                  }
                }
                else if (isNaN(amt)) {
                  alert(`${amt} is not a valid amount`)
                } else {
                  alert(`\u20A6${amt} cannot be below \u20A650 And above \u20A610000 `)
                }
              } else {
                alert(`Invalid MSISDN`)
              }
      } else if (me2U == 2) {
        const giftData = prompt(
          "1 Change PIN(Default PIN- 1234) \n" +
          "2 Data Gifting"
        )
        if (giftData == 1) {
          const changePin = prompt("Please enter current PIN")
          if (changePin == 1234) {
            const newPin = prompt("Please enter new PIN")
            if (newPin.length == 4 && !isNaN(newPin) && newPin != changePin) {
              alert("PIN Changed")
            } else if (newPin == changePin) {
              alert("New PIN cannot be previous PIN")
            } else {
              alert("Invalid Input")
            }
          } else {
            alert("Invalid Input")
          }
        } else if (giftData == 2) {
          const dataShare = prompt(
            "1 Daily Bundles \n" +
            "2 Binge Bundles \n" +
            "3 Weekly Bundles \n" +
            "4 Monthly Bundles"
          )
          if (dataShare == 1) {
            alert("Dear Customer, you do not have sufficient airtime to buy this bundle. Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
          } else if (dataShare == 2) {
            alert("Dear Customer, you do not have sufficient airtime to buy this bundle. Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
          } else if (dataShare == 3) {
            alert("Dear Customer, you do not have sufficient airtime to buy this bundle. Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
          } else if (dataShare == 4) {
            alert("Dear Customer, you do not have sufficient airtime to buy this bundle. Please recharge and try again or Dial *303# to BORROW DATA and Pay Back Later")
          } else {
            alert("Invalid Input")
          }
        } else {
          alert("Connection Problem or Invalid MMI Code")
        }
      } else if (me2U == 3) {
        const pinManage = prompt(
          "1 CHANGE PIN \n" +
          "2 Forgot PIN"
        )
        if (pinManage == 1) {
          const changePin = prompt("Please enter current PIN")
          if (changePin == 1234) {
            const newPin = prompt("Please enter new PIN")
            if (newPin.length == 4 && !isNaN(newPin) && newPin != changePin) {
              alert("PIN Changed")
            } else if (newPin == changePin) {
              alert("New PIN cannot be previous PIN")
            } else {
              alert("Invalid Input")
            }
          } else {
            alert("Invalid Input")
          }
        } else if (pinManage == 2) {
          const ninNum = prompt("Input NIN Number")
          if (ninNum.length == 11 && !isNaN(ninNum)) {
            alert("Service Temporarily Unavailable")
          } else {
            alert("Invalid Input")
          }
        } else {
          alert("Invalid Input")
        }
      } else if (me2U == 4) {
        const info = prompt(
          "With Airtel Me2U,you can share your Airtime with friends and family on the Airtel network as well as other networks in nigeria. Service fee of \n" +
          "* Next Page"
        )
        if (info == "*") {
          const fee = prompt(
            "\u20A610/transaction applies \n" +
            "# Previous"
          )
          if (fee == "#") {
            alert("Previous")
          } else {
            alert("Invalid Input")
          }
        } else {
          alert("Invalid Input")
        }
      } else if (me2U == 5) {
        alert("Default PIN is 1234. For Airtel to Airtel dial *432*NUMBER*AMOUNT# \n For Airtel to other Networks, dial *432*2*NUMBER*AMOUNT#")
      } else {
        alert("Connnection Problem or Invalid MMI Code")
      }
    } else if (nextPrompt == "7") {
      const vas = prompt(
        "STOP VAS \n\n" +
        "1. Stop a VAS Service \n" +
        "2. Exit \n" +
        "Please reply; \n" +
        "0 Main Menu"
      )
      if (vas == "1") {
        alert("No active service found \n\n Discover our wide range of Value-Added Services. Dial *408# to activate now")
      } else if (vas == "2") {
        alert("Your request has been cancelled")
      } else if (vas == "0") {
        alert("Main Menu")
      } else {
        alert("Invalid Input")
      }
    } else if (nextPrompt == "8") {
      const nin = prompt(
        "1)Check NIN Status \n" +
        "2)Submit NIN/VNIN \n" +
        "3)View Linked Numbers(s)"
      )
      if (nin == 1) {
        const ninNum = prompt("Input NIN Number")
          if (ninNum.length == 11 && !isNaN(ninNum)) {
            alert("Your NIN is VALID and has been VERIFIED. Thanks for choosing Airtel")
          } else {
            alert("Invalid Input")
          }
      } else if (nin == 2) {
        alert("Kindly Submit your NIN using www.airtel.com.ng/nin")
      } else if (nin == 3) {
        alert("Number(s) linked to your NIN \n 1.0906787765")
      } else {
        alert("Connection Problem or Invalid MMI Code")
      }
    } else if (nextPrompt == "9") {
      const selfService = prompt(
        "1 Buy Bundles & Services \n" +
        "2 Manage my account \n" +
        "3 Borrow Credit & other self services \n" +
        "4 Voice Tariffs/Bundle \n" +
        "5 Last recharges \n" +
        "Reply"
      ) 
      if (selfService == "1") {
        alert("Dial *312# to buy data bundles")
      } else if (selfService == "2") {
        const manage = prompt(
          "1 My Data Balance \n" +
          "2 My Airtime Balance \n" +
          "3 My Data Plan \n" +
          "4 My Number \n" +
          "5 My Tariff Plan \n" +
          "6 KYC Status \n" +
          "7 My PUK \n" +
          "8 My Serial Number \n" +
          "* Main Menu \n" +
          "Reply" 
        )
        if (manage == "1") {
          alert("Dear customer, You do not have an active data plan.")
        } else if (manage == "2") {
          alert(`Your account balance is ${balance} NGN`)
        } else if (manage == "3") {
          alert("Your data plan is NA")
        } else if (manage == "4") {
          alert("Your number is 9046378606")
        } else if (manage == "5") {
          alert("Yor tariff plan is SmartTalk2.0")
        } else if (manage == "6") {
          alert("Your KYC Starus is Active")
        } else if (manage == "7") {
          alert("Your PUK: 86643531")
        } else if (manage == "8") {
          alert("Your Sim Serial Number is 8923420038632128820")
        } else if (manage == "#") {
          alert("menu")
        } else {
          alert("Connection Problem or Invalid MMI Code")
        }
      } else if (selfService == "3") {
        const otherServices = prompt(
          "1 Borrow Credit(Welcome to Extra Credit) \n" +
          "2 Me2U \n" +
          "3 Do Not Disturb \n" +
          "4 VAS \n" +
          "5 Loyalty \n" +
          "6 Log a compliant \n" +
          "7 Store Locator \n" +
          "# Main Menu \n" +
          "Reply"
        )
        if (otherServices == "1") {
          alert("Dial *303# to borrow Airtime / Data")
        } else if (otherServices == "2") {
          alert("Servic Temporarily unavailable")
        } else if (otherServices == "3") {
          alert("SMS STOP to 2442 for full DND\n SMS HELP to 2442 for partial DND")
        } else if (otherServices == "4") {
          alert("Service Temporarily unavailable")
        } else if (otherServices == "5") {
          alert("Error occurred (539). Please try after some time")
        } else if (otherServices == "6") {
          alert("Kindly visit this link https://selfcare.ng.airtel.com/LogRequest")
        } else if (otherServices == "7") {
          alert("Kindly visit this link://www.alwayson.ng/Storelocator")
        } else if (otherServices == "#") {
          alert("menu")
        } else {
          alert("Connection Problem or Invalid MMI Code")
        }
      } else if (selfService == "4") {
        const talkBundles = prompt(
          "1 smartTalk @ 25k/sec flat \n" +
          "2 Buy Voice/Combo Bundle \n" +
          "* Main Menu \n" +
          "Reply"
        )
        if (talkBundles == "1") {
          const smartTalk = prompt(
            "Dial *414# to view all Airtel voice plans. \n" +
            "1 Change to smartTalk \n" +
            "2 Cancel"
          )
          if (smartTalk == 1) {
            alert("Dear Customer you have successfully migrated to smartTalk")
          } else if (smartTalk == 2) {
            alert("Cancelled")
          } else {
            alert("Connection Problem or Invalid MMI Code")
          }
        } else if (talkBundles == "2") {
            const voiceBundles = prompt(
            "Voice Bundles \n" +
            "1 Talkmore Bundle \n" +
            "2 Flexi Bundle \n" +
            "3 RPP Plan\n" +
            "4 Roaming Bundle \n" +
            "5 Check Bundle Balance \n" +
            "Reply" 
          )
          if (voiceBundles == 1) {
            const talkMore = prompt(
              "1 \u20A6100 for 10mins\n" +
              "2 \u20A6200 for 20mins\n" +
              "3 \u20A6300 for 30mins\n" +
              "4 \u20A6500 for 50mins\n" +
              "5 \u20A61000 for 100mins\n" +
              "6 \u20A61500 for 150mins\n" +
              "# Back\n" +
              "0 Main Menu\n" +
              "Reply" 
            )
            if (talkMore == "1") { // Back and Menu Code remains
              const price = 100
              const talkMore10Mins = prompt( 
              "10mins @\u20A6100 (3days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "# Back \n" +
              "0 Menu"
            )
            if (talkMore10Mins == '1') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 10mins TalkMore bundle for \u20A6100 for 3days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (talkMore10Mins == '2') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 10mins TalkMore bundle for \u20A6100 for 3days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (talkMore10Mins == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (talkMore10Mins == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 10mins for \u20A6100 for 3days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (talkMore10Mins == '22') { // back code remains
              alert("Back")
            } else if (talkMore10Mins == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
            } else if (talkMore == "2") { // Back and Menu Code remains
              const price = 200
              const talkMore20Mins = prompt( 
              "20mins @\u20A6200 (7days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "# Back \n" +
              "0 Menu"
            )
            if (talkMore20Mins == '1') {
              if (balance >= price) { 
                alert("Dear Customer, your purchase of 20mins TalkMore bundle for \u20A6200 for 7days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (talkMore20Mins == '2') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 20mins TalkMore bundle for \u20A6200 for 7days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (talkMore20Mins == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (talkMore20Mins == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 20mins for \u20A6200 for 7days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (talkMore20Mins == '22') { // back code remains
              alert("Back")
            } else if (talkMore20Mins == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
            } else if (talkMore == "3") {
              // Back and Menu Code remains
              const price = 300
              const talkMore30Mins = prompt( 
              "30mins @\u20A6300 (7days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "# Back \n" +
              "0 Menu"
            )
            if (talkMore30Mins == '1') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 30mins TalkMore bundle for \u20A6300 for 7days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (talkMore30Mins == '2') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 30mins TalkMore bundle for \u20A6300 for 7days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (talkMore30Mins == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (talkMore30Mins == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) { 
                    alert(`Transfer of 30mins for \u20A6300 for 7days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (talkMore30Mins == '22') { // back code remains
              alert("Back")
            } else if (talkMore30Mins == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
            } else if (talkMore == "4") {
              // Back and Menu Code remains
              const price = 500
              const talkMore50Mins = prompt( 
              "50mins @\u20A6500 (14days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "# Back \n" +
              "0 Menu"
            )
            if (talkMore50Mins == '1') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 50mins TalkMore bundle for \u20A6500 for 14days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (talkMore50Mins == '2') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 50mins TalkMore bundle for \u20A6500 for 14days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (talkMore50Mins == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (talkMore50Mins == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) { 
                    alert(`Transfer of 50mins for \u20A6300 for 14days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (talkMore50Mins == '22') { // back code remains
              alert("Back")
            } else if (talkMore50Mins == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
            } else if (talkMore == "5") {
              // Back and Menu Code remains
              const price = 1000
              const talkMore100Mins = prompt( 
              "100mins @\u20A61000 (7days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "# Back \n" +
              "0 Menu"
            )
            if (talkMore100Mins == '1') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 100mins TalkMore bundle for \u20A61000 for 14days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (talkMore100Mins == '2') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 100mins TalkMore bundle for \u20A61000 for 14days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (talkMore100Mins == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (talkMore100Mins == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 100mins for \u20A61000 for 14days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (talkMore100Mins == '22') { // back code remains
              alert("Back")
            } else if (talkMore100Mins == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
            } else if (talkMore == "6") {
              // Back and Menu Code remains
              const price = 1500
              const talkMore150Mins = prompt( 
              "150mins @\u20A61500 (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "# Back \n" +
              "0 Menu"
            )
            if (talkMore150Mins == '1') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 150mins TalkMore bundle for \u20A61500 for 30days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (talkMore150Mins == '2') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 150mins TalkMore bundle for \u20A61500 for 30days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (talkMore150Mins == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (talkMore150Mins == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 150mins for \u20A61500 for 30days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (talkMore150Mins == '22') { // back code remains
              alert("Back")
            } else if (talkMore150Mins == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
            } else if (talkMore == "#") {
              alert("Back")
            } else if (talkMore == "0") {
              alert("Main Menu")
            } else {
              alert("Connection problem or Invalid MMI code")
            }
          } else if(voiceBundles == 2) {
            const flexi = prompt(
              "1 10mins+400MB @ \u20A6500 \n" +
              "2 20mins+1.2GB @ \u20A61000 \n" +
              "3 40mins+2.5GB @ \u20A62000 \n" +
              "4 100mins+12GB @ \u20A65000 \n" +
              "# Back \n" + 
              "0 Back \n" +
              "Reply" 
            )
            if (flexi == "1") {
              // Back and Menu Code remains
              const price = 500
              const flexi10Mins = prompt( 
              "10mins+400MB+5sms @\u20A6500 (7days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "# Back \n" +
              "0 Menu"
            )
            if (flexi10Mins == '1') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 10mins+400MB+5sms Flexi bundle @\u20A6500 for 7days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (flexi10Mins == '2') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 10mins+400MB+5sms Flexi bundle @\u20A6500 for 7days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (flexi10Mins == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (flexi10Mins == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 10mins+400MB+5SMS @\u20A6500 for 7days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (flexi10Mins == '22') { // back code remains
              alert("Back")
            } else if (flexi10Mins == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
            } else if(flexi == "2") {
              // Back and Menu Code remains
              const price = 1000
              const flexi20Mins = prompt( 
              "20mins+1.2GB+5sms @\u20A61000 (7days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "# Back \n" +
              "0 Menu"
            )
            if (flexi20Mins == '1') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 20mins+1.2GB+5sms Flexi bundle @\u20A61000 for 7days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (flexi20Mins == '2') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 20mins+1.2GB+5sms Flexi bundle @\u20A61000 for 7days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (flexi20Mins == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (flexi20Mins == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 20mins+1.2GB+5SMS @\u20A61000 for 7days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (flexi20Mins == '22') { // back code remains
              alert("Back")
            } else if (flexi20Mins == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
            } else if (flexi == "3") {
              // Back and Menu Code remains
              const price = 2000
              const flexi40Mins = prompt( 
              "40mins+2.5GB+5sms @\u20A62000 (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "# Back \n" +
              "0 Menu"
              )
              if (flexi40Mins == '1') {
                if (balance >= price) {
                  alert("Dear Customer, your purchase of 40mins+2.5GB+5sms Flexi bundle @\u20A62000 for 30days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                }
              } else if (flexi40Mins == '2') {
                if (balance >= price) {
                  alert("Dear Customer, your purchase of 40mins+2.5GB+5sms Flexi bundle @\u20A62000 for 30days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                }
              } else if (flexi40Mins == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (flexi40Mins == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 40mins+2.5GB+5SMS @\u20A62000 for 30days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (flexi40Mins == '22') { // back code remains
                alert("Back")
              } else if (flexi40Mins == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (flexi == "4") {
              // Back and Menu Code remains
              const price = 5000
              const flexi100Mins = prompt( 
              "100mins+12GB+5sms @\u20A65000 (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "# Back \n" +
              "0 Menu"
              )
              if (flexi100Mins == '1') {
                if (balance >= price) {
                  alert("Dear Customer, your purchase of 100mins+12GB+5sms Flexi bundle @\u20A65000 for 30days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                }
              } else if (flexi100Mins == '2') {
                if (balance >= price) {
                  alert("Dear Customer, your purchase of 100mins+12GB+5sms Flexi bundle @\u20A65000 for 30days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                }
              } else if (flexi100Mins == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (flexi100Mins == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 100mins+ 12GB+5SMS @\u20A65000 for 30days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (flexi100Mins == '22') { // back code remains
                alert("Back")
              } else if (flexi100Mins == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (flexi == "#") {
              alert("Back")
            } else if (flexi == "0") {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (voiceBundles == 3) {
            const rpp = prompt(
              "RPP Plan is NOW FLEXI \n" +
              "1 10mins+400MB @ \u20A6500 \n" +
              "2 20mins+1.2GB @ \u20A61000 \n" +
              "3 40mins+2.5GB @ \u20A62000 \n" +
              "4 100mins+12GB @ \u20A65000 \n" +
              "# Back \n" + 
              "0 Back \n" +
              "Reply" 
            )
            if (rpp == "1") {
              // Back and Menu Code remains
              const price = 500
              const flexi10Mins = prompt( 
              "10mins+400MB+5sms @\u20A6500 (7days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "# Back \n" +
              "0 Menu"
            )
            if (flexi10Mins == '1') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 10mins+400MB+5sms Flexi bundle @\u20A6500 for 7days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (flexi10Mins == '2') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 10mins+400MB+5sms Flexi bundle @\u20A6500 for 7days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (flexi10Mins == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (flexi10Mins == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 10mins+400MB+5SMS @\u20A6500 for 7days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (flexi10Mins == '22') { // back code remains
              alert("Back")
            } else if (flexi10Mins == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
            } else if(rpp == "2") {
              // Back and Menu Code remains
              const price = 1000
              const flexi20Mins = prompt( 
              "20mins+1.2GB+5sms @\u20A61000 (7days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "# Back \n" +
              "0 Menu"
            )
            if (flexi20Mins == '1') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 20mins+1.2GB+5sms Flexi bundle @\u20A61000 for 7days was successful. Your data plan will automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (flexi20Mins == '2') {
              if (balance >= price) {
                alert("Dear Customer, your purchase of 20mins+1.2GB+5sms Flexi bundle @\u20A61000 for 7days was successful. Your data plan will not automatically renew upon expiration")
              } else {
                alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
              }
            } else if (flexi20Mins == '3') {
              alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
            } else if (flexi20Mins == '4') {
              const buyForFrnd = prompt (
                "Enter the Recipient MSISDN \n" +
                "22 Back \n" +
                "0 Menu"
              )
              if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                )
                if (transfer.length == 4 && !isNaN(transfer)) {
                  if (balance >= price) {
                    alert(`Transfer of 20mins+1.2GB+5SMS @\u20A61000 for 7days to ${buyForFrnd} was successful`)
                  } else {
                    alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                  }
                }  else {
                  alert("Invalid Pin")
                }
              } else if (buyForFrnd == '22') {
              alert("Back")
              } else if (buyForFrnd == '0') {
              alert("Menu")
              }
              else {
                alert(`Invalid MSISDN`)
              }
            } else if (flexi20Mins == '22') { // back code remains
              alert("Back")
            } else if (flexi20Mins == '0') { // Menu code remains
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
            } else if (rpp == "3") {
              // Back and Menu Code remains
              const price = 2000
              const flexi40Mins = prompt( 
              "40mins+2.5GB+5sms @\u20A62000 (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "# Back \n" +
              "0 Menu"
              )
              if (flexi40Mins == '1') {
                if (balance >= price) {
                  alert("Dear Customer, your purchase of 40mins+2.5GB+5sms Flexi bundle @\u20A62000 for 30days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                }
              } else if (flexi40Mins == '2') {
                if (balance >= price) {
                  alert("Dear Customer, your purchase of 40mins+2.5GB+5sms Flexi bundle @\u20A62000 for 30days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                }
              } else if (flexi40Mins == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (flexi40Mins == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 40mins+2.5GB+5SMS @\u20A62000 for 30days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (flexi40Mins == '22') { // back code remains
                alert("Back")
              } else if (flexi40Mins == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (rpp == "4") {
              // Back and Menu Code remains
              const price = 5000
              const flexi100Mins = prompt( 
              "100mins+12GB+5sms @\u20A65000 (30days) \n" +
              "1 Buy & Auto Renew \n" +
              "2 Buy Once \n" +
              "3 Use SmartCash (10% cashback) \n" +
              "4 Buy for Others \n" +
              "# Back \n" +
              "0 Menu"
              )
              if (flexi100Mins == '1') {
                if (balance >= price) {
                  alert("Dear Customer, your purchase of 100mins+12GB+5sms Flexi bundle @\u20A65000 for 30days was successful. Your data plan will automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                }
              } else if (flexi100Mins == '2') {
                if (balance >= price) {
                  alert("Dear Customer, your purchase of 100mins+12GB+5sms Flexi bundle @\u20A65000 for 30days was successful. Your data plan will not automatically renew upon expiration")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                }
              } else if (flexi100Mins == '3') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
              } else if (flexi100Mins == '4') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 100mins+ 12GB+5SMS @\u20A65000 for 30days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
              } else if (flexi100Mins == '22') { // back code remains
                alert("Back")
              } else if (flexi100Mins == '0') { // Menu code remains
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (rpp == "#") {
              alert("Back")
            } else if (rpp == "0") {
              alert("Menu")
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (voiceBundles == 4) {
            const roam = prompt(
              "ROAM THE WORLD(RTW) \n" +
              "1 RTW- \u20A64500 \n" +
              "2 RTW- \u20A610000 \n" +
              "3 RTW- \u20A625000 \n" +
              "4 FREE INCOMING CALLS \n" +
              "5 CHECK BAL \n" +
              "Reply" 
            )
            if (roam == 1) {
              const rtw1 = prompt (
                "1 List of Countries \n" +
                "2 Proceed to buy \n" +
                "0 Menu \n" +
                "Reply"
              )
              if (rtw1 == "1") {
                const names = [
                  {
                  AFRICA: `
                  "Angola", "Benin", "Cameroon", "Chad", "Congo-DR", "Egypt","Congo-B", "Gabon", "Gambia", "Ethiopia", "Malawi", "Kenya", "Niger" `
                },
                {
                  AMERICAS: `
                  "USA", "Canada", "Brazil", "Argentina", "Mexico", "Jamaica", "Dominica"`
                },
                {
                  EUROPE: `
                  "Albania", "Austria", "Belgium", "Czech", "Denmark", "Finland", "France", "Germany"`
                }, 
                {
                  ASIA: `
                  "India", "China", "Malaysia", "Vietnam", "Hong-Kong", "Japan", "South Korea"`
                },
                {
                  MIDDLE_EAST : `
                  "UAE", "Saudi-Arabia", "Israel, "Qatar", "Kuwait"`
                }
              ]
                console.log(names);
                
                const countries = prompt (
                  "You will receive an SMS with the list of applicable countries and tariff shortly. \n" +
                  "# Back \n" +
                  "0 Main Menu"
                )
                if (countries == "#") {
                  alert("Back")
                } else if (countries == "0") {
                  alert("Main Menu")
                }
              } else if (rtw1 == "2") {
                // Back and Menu Code remains
                const price = 4500
                const dataPlan250 = prompt( 
                "250MB+10mins+10SMS @\u20A64500 for 1day when you roam in 60+ countries \n" +
                "1 Buy Once \n" +
                "2 Use SmartCash\n" +
                "3 Buy for Others \n" +
                "0 Menu"
                )
                if (dataPlan250 == '1') {
                if (balance >= price) {
                  alert("Dear Customer, your purchase of 250MB+10mins+10SMS @\u20A64500 for 1day was successful.")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                } else if (dataPlan250 == '2') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
                } else if (dataPlan250 == '3') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 250MB @\u20A6600 for 1day to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
                } else if (dataPlan250 == '0') { // Menu code remains
                  alert("Menu")
                } else {
                  alert("Connection Problem or Invalid MMI Code")
                }
              } else if (rtw1 == "0") {
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (roam == 2) {
              const rtw2 = prompt (
                "1 List of Countries \n" +
                "2 Proceed to buy \n" +
                "0 Menu \n" +
                "Reply"
              )
              if (rtw2 == "1") {
                const names = [
                  {
                  AFRICA: `
                  "Angola", "Benin", "Cameroon", "Chad", "Congo-DR", "Egypt","Congo-B", "Gabon", "Gambia", "Ethiopia", "Malawi", "Kenya", "Niger" `
                },
                {
                  AMERICAS: `
                  "USA", "Canada", "Brazil", "Argentina", "Mexico", "Jamaica", "Dominica"`
                },
                {
                  EUROPE: `
                  "Albania", "Austria", "Belgium", "Czech", "Denmark", "Finland", "France", "Germany"`
                }, 
                {
                  ASIA: `
                  "India", "China", "Malaysia", "Vietnam", "Hong-Kong", "Japan", "South Korea"`
                },
                {
                  MIDDLE_EAST : `
                  "UAE", "Saudi-Arabia", "Israel, "Qatar", "Kuwait"`
                }
              ]
                console.log(names);
                
                const countries = prompt (
                  "You will receive an SMS with the list of applicable countries and tariff shortly. \n" +
                  "# Back \n" +
                  "0 Main Menu"
                )
                if (countries == "#") {
                  alert("Back")
                } else if (countries == "0") {
                  alert("Main Menu")
                }
              } else if (rtw2 == "2") {
                // Back and Menu Code remains
                const price = 10000
                const dataPlan1GB = prompt( 
                "1GB+15mins+15SMS @\u20A610000 for 1day when you roam in 60+ countries \n" +
                "1 Buy Once \n" +
                "2 Use SmartCash\n" +
                "3 Buy for Others \n" +
                "0 Menu"
                )
                if (dataPlan1GB == '1') {
                if (balance >= price) {
                  alert("Dear Customer, your purchase of 1GB+15mins+15SMS @\u20A610000 for 10days was successful.")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                } else if (dataPlan1GB == '2') {
                alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
                } else if (dataPlan1GB == '3') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 1GB @\u20A610000 for 10days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
                } else if (dataPlan1GB == '0') { // Menu code remains
                  alert("Menu")
                } else {
                  alert("Connection Problem or Invalid MMI Code")
                }
              } else if (rtw2 == "0") {
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (roam == 3) {
              const rtw3 = prompt (
                "1 List of Countries \n" +
                "2 Proceed to buy \n" +
                "0 Menu \n" +
                "Reply"
              )
              if (rtw3 == "1") {
                const names = [
                  {
                  AFRICA: `
                  "Angola", "Benin", "Cameroon", "Chad", "Congo-DR", "Egypt","Congo-B", "Gabon", "Gambia", "Ethiopia", "Malawi", "Kenya", "Niger" `
                },
                {
                  AMERICAS: `
                  "USA", "Canada", "Brazil", "Argentina", "Mexico", "Jamaica", "Dominica"`
                },
                {
                  EUROPE: `
                  "Albania", "Austria", "Belgium", "Czech", "Denmark", "Finland", "France", "Germany"`
                }, 
                {
                  ASIA: `
                  "India", "China", "Malaysia", "Vietnam", "Hong-Kong", "Japan", "South Korea"`
                },
                {
                  MIDDLE_EAST : `
                  "UAE", "Saudi-Arabia", "Israel, "Qatar", "Kuwait"`
                }
              ]
                console.log(names);
                
                const countries = prompt (
                  "You will receive an SMS with the list of applicable countries and tariff shortly. \n" +
                  "# Back \n" +
                  "0 Main Menu"
                )
                if (countries == "#") {
                  alert("Back")
                } else if (countries == "0") {
                  alert("Main Menu")
                }
              } else if (rtw3 == "2") {
                // Back and Menu Code remains
                const price = 10000
                const dataPlan3GB = prompt( 
                "3GB+25mins+30SMS @\u20A625000 for 30days when you roam in 60+ countries \n" +
                "1 Buy Once \n" +
                "2 Use SmartCash\n" +
                "3 Buy for Others \n" +
                "0 Menu"
                )
                if (dataPlan3GB == '1') {
                if (balance >= price) {
                  alert("Dear Customer, your purchase of 3GB+25mins+25SMS @\u20A625000 for 30days was successful.")
                } else {
                  alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                } else if (dataPlan3GB == '2') {
                  alert("Dear Customer, kindly dial *939# to open a SmartCash Wallet. Thank you. ")
                } else if (dataPlan3GB == '3') {
                const buyForFrnd = prompt (
                  "Enter the Recipient MSISDN \n" +
                  "22 Back \n" +
                  "0 Menu"
                )
                if (buyForFrnd.length == 11 && !isNaN(buyForFrnd) && (buyForFrnd.startsWith("070") || buyForFrnd.startsWith("080") || buyForFrnd.startsWith("081") || buyForFrnd.startsWith("090") || buyForFrnd.startsWith("091"))) {
                  const transfer = prompt(`Enter pin to transfer to ${buyForFrnd} \n`
                  )
                  if (transfer.length == 4 && !isNaN(transfer)) {
                    if (balance >= price) {
                      alert(`Transfer of 3GB @\u20A625000 for 30days to ${buyForFrnd} was successful`)
                    } else {
                      alert("Dear Customer, you do not have sufficient airtime to buy this bundle.Please recharge and try again or *303# to BORROW DATA and Pay Back Later")
                    }
                  }  else {
                    alert("Invalid Pin")
                  }
                } else if (buyForFrnd == '22') {
                alert("Back")
                } else if (buyForFrnd == '0') {
                alert("Menu")
                }
                else {
                  alert(`Invalid MSISDN`)
                }
                } else if (dataPlan3GB == '0') { // Menu code remains
                  alert("Menu")
                } else {
                  alert("Connection Problem or Invalid MMI Code")
                }
              } else if (rtw3 == "0") {
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (roam == 4) {
              const calls = prompt (
                "Dear Customer, you will receive an SMS with your data balance details shortly. \n" +
                "0 Menu"
              )
              if (calls == "0") {
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else if (roam == 5) {
              const roamBalance = prompt(
                "Dear customer, you do not have an active Roaming Plan. \n" +
                "0 Menu"
              )
              if (roamBalance == "0") {
                alert("Menu")
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
            } else {
              alert("Connection Problem or Invalid MMI Code")
            }
          } else if (voiceBundles == 5) {
            const bal = prompt(
                "1 Talkmore \n" +
                "2 Flexi \n" +
                "3 6x/Wadata & Others \n" +
                "Reply"
              )
              if (bal == 1) {
                const talkMoreBalance = prompt (
                "Dear Customer, you will receive an SMS with your VOICE balance details shortly. \n" +
                "# Back \n" +
                "0 Main Menu"
              )
              if (talkMoreBalance == "#") {
                alert("Back")
              } else if (talkMoreBalance == "0") {
                alert("Menu")
              }  else {
                alert("Connection Problem or Invalid MMI Code")
              }
              } else if (bal == 2) {
                const flexiBalance = prompt (
                "Dear Customer, you will receive an SMS with your VOICE balance details shortly. \n" +
                "# Back \n" +
                "0 Main Menu"
              )
              if (flexiBalance == "#") {
                alert("Back")
              } else if (flexiBalance == "0") {
                alert("Menu")
              }  else {
                alert("Connection Problem or Invalid MMI Code")
              }
              } else if (bal == 3) {
                const watadaBalance = prompt (
                "Dear Customer, you do not have ANY active voice bundle. Dial *234# to buy voice bundle \n" +
                "# Back \n" +
                "0 Main Menu"
              )
              if (watadaBalance == "#") {
                alert("Bsck")
              } else if (watadaBalance == "0") {
                alert("Menu")
              }  else {
                alert("Connection Problem or Invalid MMI Code")
              }
              } else {
                alert("Connection Problem or Invalid MMI Code")
              }
          } else {
            alert("Connection problem or Invalid MMMI code")
          }
        } else if (talkBundles == "*") {
          alert("Main menu")
        } else {
          alert("Connection Problem or Invalid MMI Code")
        }
      } else if (selfService == "5") {
        alert("1.2026-02-18 17:34:37,350")
      } else {
        alert("Connection Problem or Invalid MMI Code")
      }
    } else if (nextPrompt == "#") {
      alert("prev")
    } else {
      alert("Connection problem or Invla")
    }
  } else {
    alert("Invalid Input"); // invalid input
  }
} else {
  // Else Statement if the ussd code input doesn't work
  alert("Invalid Transaction Selection Input");
}
