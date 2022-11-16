export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body

        // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
  


  
    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ report0: `
      ${body.taxMonth} 
      ${body.startMonth}
      ${body.pensionMonth}
      ${body.marriageType}
      ${body.dependentNo}
      ${body.isNewJob}
      ${body.isNewTaxSubject}
      ${body.isResigned}
      ${body.isNoLongerTaxSubject}
      ${body.isGoingToRetire}
      ${body.IsRetirementDateKnown}
      ${body.isNPWP}
      ${body.mSumBaseSalary}
      ${body.mSumPPhAllowance}
      ${body.mSumOtherAllowance}
      ${body.mSumOvertime}
      ${body.mSumJKK}
      ${body.mSumJKM}
      ${body.mSumJPK}
      ${body.mSumInsurance}
      ${body.mSumSharedProfit}
      ${body.mSumTantiem}
      ${body.mSumGratification}
      ${body.mSumBonus}
      ${body.mSumPremium}
      ${body.mSumIDAllowance}
      ${body.mSumOthers}
      ${body.cSumBaseSalary}
      ${body.cSumPPhAllowance}
      ${body.cSumOtherAllowance}
      ${body.cSumOvertime}
      ${body.cSumJKK}
      ${body.cSumJKM}
      ${body.cSumJPK}
      ${body.cSumInsurance}
      ${body.cSumSharedProfit}
      ${body.cSumTantiem}
      ${body.cSumGratification}
      ${body.cSumBonus}
      ${body.cSumPremium}
      ${body.cSumIDAllowance}
      ${body.cSumOthers}
      ` 
    })
  }

  // Guard clause checks for first and last name,
    // and returns early if they are not found
 /*   if (
      !body.taxMonth || 
      !body.startMonth ||
      !body.pensionMonth ||
      !body.marriageType ||
      !body.dependentNo ||
      !body.isNewJob ||
      !body.isNewTaxSubject ||
      !body.isResigned ||
      !body.isNoLongerTaxSubject ||
      !body.isGoingToRetire ||
      !body.IsRetirementDateKnown ||
      !body.isNPWP 
      ) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ report0: 'Data not found' })
    }
  */  
