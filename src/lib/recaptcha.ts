export async function verifyRecaptcha(token?: string) {
  const secret = process.env.RECAPTCHA_KEY;

  if (!secret) {
    console.warn('RECAPTCHA_KEY não configurada. A validação será ignorada em ambiente de desenvolvimento.');
    return true;
  }

  if (!token) {
    return false;
  }

  const params = new URLSearchParams({
    secret,
    response: token,
  });

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  if (!response.ok) {
    console.error('Falha ao verificar reCAPTCHA', response.statusText);
    return false;
  }

  const data = await response.json();
  return Boolean(data.success) && Number(data.score ?? 0) >= 0.5;
}
