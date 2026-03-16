const balance = 5000
const ussd = prompt("Enter Ussd code");
if (ussd == 111) {
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
          "3 \u20A610000/100GB \n" +
          "4 \u20A630000/160GB \n" +
          "5 \u20A640000/210GB \n" +
          "22 Back \n" +
          "0 Menu" 
        )
        if (bigMonthly == "1") {
          alert("35gb")
        } else if (bigMonthly == "2") {
          alert("60gb")
        } else if (bigMonthly == "3") {
          alert("100gb")
        } else if (bigMonthly == "4") {
          alert("160gb")
        } else if (bigMonthly == "5") {
          alert("210gb")
        } else if (bigMonthly == "22") {
          alert("Back")
        } else if (bigMonthly == "0") {
          alert("Menu")
        } else {
          alert("Connection Problem or Invalid MMI Code")
        }
      } else if (plans == '6') {
        alert("Plans6")
      } else if (plans == '7') {
        alert("Plans7")
      } else if (plans == '8') {
        alert("Plans8")
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
        alert("Page11")
      } else if (nextPage === '12') {
        alert("Page12")
      } else if (nextPage === '13') {
        alert("Page13")
      } else if (nextPage === '14') {
        alert("Page14")
      } else if (nextPage === '15') {
        alert("Page15")
      } else if (nextPage === '16') {
        alert("Page16")
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
    alert("Recharge");
  } else if (ussdPrompt == 3) { 
    // Borrow Section
    alert("Borrow Airtime");
  } else if (ussdPrompt == 4) {
    // Account Balance Section
    alert("Acct bal");
  } else if (ussdPrompt == 5) {
    // Data Bal Section
    alert("Data bal");
  } else if (ussdPrompt == "*") {
    // Next Page Section
    alert("Next Page");
  } else {
    alert("Invalid Input"); // invalid input
  }
} else {
  // Else Statement if the ussd code input doesn't work
  alert("Invalid Transaction Selection Input");
}