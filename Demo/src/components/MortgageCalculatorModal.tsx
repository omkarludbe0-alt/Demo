import { useState, useId } from 'react';
import { X, Calculator, ArrowRight, IndianRupee, Info } from 'lucide-react';

interface MortgageCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyToEnquiry: (details: string) => void;
}

export function MortgageCalculatorModal({ isOpen, onClose, onApplyToEnquiry }: MortgageCalculatorModalProps) {
  const propertyPriceInputId = useId();
  const downPaymentInputId = useId();
  const interestRateInputId = useId();
  const tenureInputId = useId();

  // State in Crores (default ₹15 Cr for luxury property)
  const [propertyPriceCr, setPropertyPriceCr] = useState<number>(15.0);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [annualInterestRate, setAnnualInterestRate] = useState<number>(8.5);
  const [tenureYears, setTenureYears] = useState<number>(20);

  if (!isOpen) return null;

  const propertyPrice = propertyPriceCr * 10000000;
  const downPaymentAmount = propertyPrice * (downPaymentPercent / 100);
  const principalLoanAmount = propertyPrice - downPaymentAmount;

  const monthlyRate = annualInterestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  // EMI formula: [P x R x (1+R)^N]/[(1+R)^N-1]
  const emi = monthlyRate > 0
    ? (principalLoanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
    : principalLoanAmount / totalMonths;

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - principalLoanAmount;

  const principalRatio = totalPayment > 0 ? (principalLoanAmount / totalPayment) * 100 : 50;
  const interestRatio = totalPayment > 0 ? (totalInterest / totalPayment) * 100 : 50;

  const formatINR = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakh`;
    }
    return `₹${Math.round(val).toLocaleString('en-IN')}`;
  };

  const handleApply = () => {
    const summary = `Estimated for Property Price: ${formatINR(propertyPrice)} (Down Payment: ${downPaymentPercent}%, Tenure: ${tenureYears} yrs, Approx EMI: ${formatINR(emi)}/mo)`;
    onApplyToEnquiry(summary);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="calculator-title"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#181B19] text-[#F6F3ED] rounded-lg shadow-2xl border border-[#B89B68]/40 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#141715]">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[#B89B68]" />
            <h2 id="calculator-title" className="font-serif text-xl sm:text-2xl text-[#F6F3ED] font-light">
              Luxury Property Investment & EMI Estimator
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close calculator"
            className="p-1.5 text-neutral-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Property Price Slider */}
          <div>
            <div className="flex items-center justify-between text-xs mb-2">
              <label htmlFor={propertyPriceInputId} className="uppercase tracking-wider text-neutral-400 font-medium">Estimated Property Value</label>
              <span className="font-serif text-xl text-[#D4BE92] font-semibold tabular-nums">
                ₹{propertyPriceCr.toFixed(2)} Cr
              </span>
            </div>
            <input
              id={propertyPriceInputId}
              type="range"
              min="1"
              max="50"
              step="0.5"
              value={propertyPriceCr}
              onChange={(e) => setPropertyPriceCr(parseFloat(e.target.value))}
              className="w-full accent-[#B89B68] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-neutral-500 mt-1 font-mono">
              <span>₹1 Cr</span>
              <span>₹25 Cr</span>
              <span>₹50 Cr</span>
            </div>
          </div>

          {/* Grid of Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Down Payment % */}
            <div className="p-3.5 rounded bg-white/5 border border-white/10">
              <label htmlFor={downPaymentInputId} className="text-[11px] uppercase tracking-wider text-neutral-400 block mb-1">
                Down Payment ({downPaymentPercent}%)
              </label>
              <p className="font-serif text-base text-[#F6F3ED] mb-2 font-medium">
                {formatINR(downPaymentAmount)}
              </p>
              <input
                id={downPaymentInputId}
                type="range"
                min="10"
                max="60"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(parseInt(e.target.value))}
                className="w-full accent-[#B89B68] cursor-pointer"
              />
            </div>

            {/* Interest Rate */}
            <div className="p-3.5 rounded bg-white/5 border border-white/10">
              <label htmlFor={interestRateInputId} className="text-[11px] uppercase tracking-wider text-neutral-400 block mb-1">
                Interest Rate ({annualInterestRate}%)
              </label>
              <p className="font-serif text-base text-[#F6F3ED] mb-2 font-medium">
                Annual Floating / Fixed
              </p>
              <input
                id={interestRateInputId}
                type="range"
                min="7.0"
                max="12.0"
                step="0.25"
                value={annualInterestRate}
                onChange={(e) => setAnnualInterestRate(parseFloat(e.target.value))}
                className="w-full accent-[#B89B68] cursor-pointer"
              />
            </div>

            {/* Tenure */}
            <div className="p-3.5 rounded bg-white/5 border border-white/10">
              <label htmlFor={tenureInputId} className="text-[11px] uppercase tracking-wider text-neutral-400 block mb-1">
                Loan Tenure ({tenureYears} Years)
              </label>
              <p className="font-serif text-base text-[#F6F3ED] mb-2 font-medium">
                {totalMonths} Installments
              </p>
              <input
                id={tenureInputId}
                type="range"
                min="5"
                max="30"
                step="1"
                value={tenureYears}
                onChange={(e) => setTenureYears(parseInt(e.target.value))}
                className="w-full accent-[#B89B68] cursor-pointer"
              />
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="p-5 rounded-lg bg-black/50 border border-[#B89B68]/40 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4BE92]">Estimated Monthly Outflow</span>
                <p className="font-serif text-3xl sm:text-4xl text-[#F6F3ED] font-light mt-1">
                  {formatINR(emi)} <span className="text-xs font-sans text-neutral-400 font-normal">/ month</span>
                </p>
              </div>

              <div className="text-left sm:text-right text-xs">
                <span className="text-neutral-400 block">Total Principal Financed</span>
                <span className="font-medium text-[#F6F3ED] block mt-0.5">{formatINR(principalLoanAmount)}</span>
              </div>
            </div>

            {/* Visual Amortization Bar */}
            <div>
              <div className="flex justify-between text-[11px] text-neutral-400 mb-1.5">
                <span>Principal: {principalRatio.toFixed(1)}% ({formatINR(principalLoanAmount)})</span>
                <span>Total Interest: {interestRatio.toFixed(1)}% ({formatINR(totalInterest)})</span>
              </div>
              <div className="w-full h-2 rounded-full overflow-hidden flex bg-white/10">
                <div style={{ width: `${principalRatio}%` }} className="bg-[#B89B68] h-full" />
                <div style={{ width: `${interestRatio}%` }} className="bg-neutral-600 h-full" />
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-neutral-400 pt-2 border-t border-white/10">
              <Info className="w-3.5 h-3.5 text-[#B89B68] shrink-0" />
              <span>
                Fictional estimate based on standard Indian bank lending terms. Subject to private banking underwriting.
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-[#141715] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs uppercase tracking-wider text-neutral-400 hover:text-white"
          >
            Close
          </button>

          <button
            onClick={handleApply}
            className="w-full sm:w-auto px-6 py-2.5 text-xs uppercase tracking-widest font-semibold text-[#141715] bg-[#B89B68] hover:bg-[#D4BE92] transition-colors rounded flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span>Attach to Enquiry Form</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
