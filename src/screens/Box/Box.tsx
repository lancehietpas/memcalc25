import React, { useState, useMemo } from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { incomeDiscounts, membershipRates } from "../../data/rates";

export const Box = (): JSX.Element => {
  const [householdSize, setHouseholdSize] = useState<string>("1");
  const [membershipType, setMembershipType] = useState<string>("");
  const [income, setIncome] = useState<string>("");
  const [rate, setRate] = useState<string>("");
  const [baseRate, setBaseRate] = useState<string>("");
  const [discount, setDiscount] = useState<string>("");

  // Generate household size options
  const householdSizes = useMemo(() => {
    return [...Array(9)].map((_, i) => String(i + 1)).concat(["10+"]);
  }, []);

  // Filter membership types based on household size
  const availableMembershipTypes = useMemo(() => {
    const size = parseInt(householdSize);
    return membershipRates.filter(m => m.minPeople <= size);
  }, [householdSize]);

  const calculateRate = () => {
    if (!membershipType || !income || !householdSize) {
      setRate("Please select all options");
      setBaseRate("");
      setDiscount("");
      return;
    }

    const membershipData = membershipRates.find(m => m.type === membershipType);
    const incomeData = incomeDiscounts.find(i => i.range === income);

    if (!membershipData || !incomeData) {
      setRate("Invalid selection");
      setBaseRate("");
      setDiscount("");
      return;
    }

    const baseRateValue = membershipData.baseRate;
    setBaseRate(`$${baseRateValue.toFixed(2)}`);

    const sizeIndex = Math.min(parseInt(householdSize) - 1, 4); // 0-4 for 1-5+ people
    const discountFactor = incomeData.factors[sizeIndex];
    const discountAmount = baseRateValue * (1 - discountFactor);
    const finalRate = baseRateValue - discountAmount;

    setDiscount(`$${finalRate.toFixed(2)}`);
    setRate(`$${discountAmount.toFixed(2)}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold text-[#00aeef]">
            Calculate My Rate
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="household-size">
              Number of people in household
            </Label>
            <Select 
              defaultValue="1"
              onValueChange={(value) => setHouseholdSize(value)}
            >
              <SelectTrigger id="household-size">
                <SelectValue placeholder="Select household size" />
              </SelectTrigger>
              <SelectContent>
                {householdSizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="membership-type">Membership Type</Label>
            <Select
              value={membershipType}
              onValueChange={(value) => setMembershipType(value)}
            >
              <SelectTrigger id="membership-type">
                <SelectValue placeholder="Select membership type" />
              </SelectTrigger>
              <SelectContent>
                {availableMembershipTypes.map((type) => (
                  <SelectItem key={type.type} value={type.type}>
                    {type.type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="income">Annual Household Income</Label>
            <Select
              value={income}
              onValueChange={(value) => setIncome(value)}
            >
              <SelectTrigger id="income">
                <SelectValue placeholder="Select income range" />
              </SelectTrigger>
              <SelectContent>
                {incomeDiscounts.map((range) => (
                  <SelectItem key={range.range} value={range.range}>
                    {range.range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            className="w-full bg-[#c6168d] text-white hover:bg-[#b11480]"
            onClick={calculateRate}
          >
            Calculate
          </Button>

          <div className="space-y-2 pt-2">
            <Label htmlFor="base-rate">Base Rate:</Label>
            <div className="border rounded-md p-3 min-h-10 bg-white">
              {baseRate}
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <Label htmlFor="discount">Discount Amount:</Label>
            <div className="border rounded-md p-3 min-h-10 bg-white">
              {discount}
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <Label htmlFor="rate-result">Your Rate Is:</Label>
            <div className="border rounded-md p-3 min-h-10 bg-white">
              {rate}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};