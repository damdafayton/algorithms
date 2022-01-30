# Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
# IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

def is_valid_IP(stringo):
    listedString = stringo.split('.')
    if len(listedString) == 4:
        for eachNumber in listedString:
            eachNumber = bytes(eachNumber, 'ascii')
            if (len(eachNumber) >= 2 and eachNumber[0] == 48) \
                    or (len(eachNumber) > 2 and (eachNumber[0] > 50 \
                                                 or (eachNumber[0] == 50 and eachNumber[1] > 53) \
                                                 or (eachNumber[0] == 50 and eachNumber[1] == 53 and eachNumber[
                        2] > 53))):
                return False
            # check if they are digits
            for eachDigit in eachNumber:
                # print(bytes(eachDigit,'ascii'), end=' ')
                if eachDigit < 48 \
                        or eachDigit > 57: return False
        return True
    else:
        return False


print(is_valid_IP('123.45.67.89'))
print(is_valid_IP('123.045.067.089'))
print(is_valid_IP('192.168.1.300'))
